import Link from "next/link";

import { Container } from "@components";
import { navigation } from "@constants";

function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {navigation.map(({ link, title }) => {
                return (
                  <NavLink key={title} href={link}>
                    {title}
                  </NavLink>
                );
              })}
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} Serhii Bilous. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
