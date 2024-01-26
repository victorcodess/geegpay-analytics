import { useEffect } from "react";

const useClickOutside = (ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[], callback: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const isArray = Array.isArray(ref);
      if (isArray && ref.every((r) => shouldTriggerCallback(r, e))) {
        callback();
      }

      if (!isArray && shouldTriggerCallback(ref as React.RefObject<HTMLElement>, e)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);

  function shouldTriggerCallback(ref: React.RefObject<HTMLElement>, e: MouseEvent) {
    return ref.current && !ref.current.contains(e.target as Node);
  }
};

export default useClickOutside;
