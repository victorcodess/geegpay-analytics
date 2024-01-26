import useClickOutside from "../hooks/useClickOutside";
import {
  Children,
  PropsWithChildren,
  ReactNode,
  cloneElement,
  useRef,
  useState,
} from "react";

interface DropdownComponent<T = ReactNode> {
  showDropdown?: boolean;
  toggleDropdown?: () => void;
  className?: string;
  children: T;
  autoClose?: boolean;
}

export default function Dropdown({ children }: PropsWithChildren) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function toggleDropdown() {
    setShowDropdown((prev) => !prev);
  }

  const mappedChildren = Children.map(children, (child) =>
    cloneElement(child as React.ReactElement<DropdownComponent>, {
      showDropdown,
      toggleDropdown,
    })
  );

  useClickOutside(dropdownRef, () => {
    setShowDropdown(false);
  });

  return (
    <div className="relative" ref={dropdownRef}>
      {mappedChildren}
    </div>
  );
}

export function DropdownTrigger(
  props: React.PropsWithChildren<DropdownComponent<ReactNode | ((show?: boolean) => ReactNode)>>
) {
  const { toggleDropdown, showDropdown, children } = props;

  return (
    <div className="cursor-pointer" onClick={toggleDropdown}>
      {typeof children === "function" ? (children as (show?: boolean) => ReactNode)(showDropdown) : children}
    </div>
  );
}

export function DropdownContent(props: DropdownComponent) {
  const { autoClose = true } = props;

  if (!props.showDropdown) return null;

  return (
    <div
      className={`dropdown-reveal min-w-full ${props.className}`}
      onClick={autoClose ? props.toggleDropdown : undefined}
    >
      {props.children}
    </div>
  );
}
