import clsx from "clsx";
import { PropsWithChildren } from "react";

type ProseProps = PropsWithChildren & {
  className?: string;
};

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={clsx(className, "prose dark:prose-invert")}>{children}</div>
  );
}
