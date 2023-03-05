import Image from "next/image";

import { Card, PageLayout } from "@components";

import sirko from "@images/projects/sirko.png";
import bDiary from "@images/projects/bdiary.webp";
import carRepair from "@images/projects/car-repair.webp";

export const metadata = {
  title: "Side projects / Startups | Software Engineer, Front-End",
  description:
    "This is a list of projects that I have implemented, helped to implement, or am still working on separately from my main job.",
};

const projects = [
  {
    name: "Sirko",
    description:
      "This is a product that serves as a catalog of companies that specialize in selecting and importing cars from abroad, repairing vehicles, and handling all the necessary documentation. The main idea is that anyone can view information about these companies, including reviews, ratings, and services provided by each company. Additionally, existing clients can share their experiences with a particular company to recommend good services or to warn others about poor services.",
    link: { href: "https://sirko.info", label: "sirko.info" },
    logo: sirko,
  },
  {
    name: "BDiary",
    description: "...",
    link: { href: "https://mybdiary.com/en/main-en/", label: "mybdiary.com" },
    logo: bDiary,
  },
  {
    name: "Car Repair Service",
    description: "...",
    link: { href: "https://car-repair.info/", label: "car-repair.info" },
    logo: carRepair,
  },
];

function LinkIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default async function Projects() {
  return (
    <>
      <PageLayout
        title="Side projects / Startups"
        intro="This is a list of projects that I have implemented, helped to
            implement, or am still working on separately from my main job. I can
            call them startups or services that may grow into something
            grandiose in the future."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="flex items-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    unoptimized
                  />
                </div>
                <h2 className="ml-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link target="_blank" href={project.link.href}>
                    {project.name}
                  </Card.Link>
                </h2>
              </div>

              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}
