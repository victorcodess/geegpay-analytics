import { ReactNode } from "react";

export function Modal(props: {
  children: ReactNode;
  toggle: () => void;
  show: boolean;
}) {
  const { children, toggle, show } = props;

  if (!show) return null;
  return (
    <div
      className="fixed top-0 left-0 z-50 bg-black/50 w-[100vw] h-[100vh] overflow-auto flex items-start py-[100px] justify-center"
      id="wrapper"
      onClick={toggle}
    >
      <div
        className="overflow-auto w-[300px] sm:w-[400px] bg-white dark:bg-[#0D0D0D] border rounded-[14px] border-[#E1DFDF] dark:border-[#2D2A2A] flex items-center justify-center flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
