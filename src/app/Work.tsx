import Image from "next/image";

import { Button, Prose } from "@/components";

import NiX from "@/images/work/n-ix.jpeg";
import axDraft from "@/images/work/axdraft.jpeg";
import deem from "@/images/work/deem.jpeg";
import tfx from "@/images/work/tfx.jpeg";
import ria from "@/images/work/ria.jpeg";
import upwork from "@/images/work/upwork.jpeg";

function ArrowDownIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

export function Work() {
  let resume: any[] = [
    {
      company: "N-iX / project Grainger",
      title: "Senior Frontend Developer",
      logo: NiX,
      start: "Jun 2022",
      end: "Dec 2022",
    },
    {
      company: "AXDRAFT (an Onit company)",
      title: "Senior Software Engineer",
      logo: axDraft,
      start: "Dec 2021",
      end: "May 2022",
    },
    {
      company: "Deem, Inc.",
      title: "Senior Software Engineer",
      logo: deem,
      start: "Jun 2019",
      end: "Nov 2021",
    },
    {
      company: "Taxes for Expats",
      title: "Software Engineer",
      logo: tfx,
      start: "Oct 2016",
      end: "May 2019",
    },
    {
      company: "RIA.com",
      title: "Software Engineer",
      logo: ria,
      start: "Jan 2015",
      end: "Oct 2016",
    },
    {
      company: "Upwork",
      title: "Front-End developer",
      logo: upwork,
      start: "Jan 2014",
      end: "Jan 2015",
    },
  ];

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Working experience</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${
                    role.end.label ?? role.end
                  }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{" "}
                  <span aria-hidden="true">—</span>{" "}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <Button
          href="/resume/Serhii Bilous - Senior Front-End Engineer.pdf"
          download={true}
          variant="secondary"
          className="group mt-6 w-full"
          target="_blank"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <Prose>
          <p className="mt-0">
            I am new in the US and came here 3 months ago from Ukraine because
            of the war. Looking for great new opportunities.
          </p>
          <p className="text-center">
            <em>Here you can get the answers to your questions about me.</em>
            <br />
            <em>Please get to know me better before we talk.</em>
          </p>
          <Button variant="primary" href="/faq" className="w-full my-0">
            FAQ
          </Button>
        </Prose>
      </div>
    </>
  );
}
