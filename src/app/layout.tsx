"use client";

import "./globals.css";
import React, { PropsWithChildren } from "react";
import { Container, Footer, Header } from "@/components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className={`h-full antialiased ${roboto.className}`} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <title></title>
      </head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed container px-0 inset-0 flex justify-center">
          <div className="flex w-full">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
