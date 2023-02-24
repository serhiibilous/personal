import React, { HTMLProps } from "react";

interface Container extends HTMLProps<HTMLDivElement> {}
export function Container({ children, className }: Container) {
  return (
    <div className={`container px-4 md:px-8 ${className}`}>
      <div className="w-full">{children}</div>
    </div>
  );
}
