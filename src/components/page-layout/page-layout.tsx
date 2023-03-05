import React, { PropsWithChildren } from "react";
import { Social } from "@components";

interface PageLayout extends PropsWithChildren {
  title: string;
  intro?: string;
  description?: React.ReactElement;
  withSocial?: boolean;
}

export function PageLayout({
  title,
  intro,
  description,
  children,
  withSocial,
}: PageLayout) {
  return (
    <div className="mt-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {description ? description : intro}
        </p>
        {withSocial && <Social className="mt-6 flex gap-6" />}
      </header>
      <div className="mt-16">{children}</div>
    </div>
  );
}
