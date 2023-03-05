import Link from "next/link";
import { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type SocialLinkProps = PropsWithChildren & LinkProps;

export function SocialLink({ children, ...props }: SocialLinkProps) {
  return (
    <Link
      className="group -m-1 p-1 hover:opacity-[0.8] transition-opacity"
      {...props}
      target="_blank"
    >
      {children}
    </Link>
  );
}
