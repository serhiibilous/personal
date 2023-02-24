import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { PageLayout } from "@/components";

export const metadata = {
  title: "Soft and Hard Skills | Software Engineer, Front-End",
  description:
    "List of my skills and technologies that I am currently using or used earlier.",
};

const data = [
  {
    technology: "Languages",
    list: ["JavaScript, TypeScript"],
    experience: 5,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Back End",
    list: ["Node Js"],
    experience: 5,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Front End",
    list: [
      "React",
      "Redux",
      "Next Js",
      "React Hook Form",
      "SWR",
      "React Query",
      "Vue Js",
    ],
    experience: 5,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Styling",
    list: [
      "CSS/SCSS",
      "CSS Modules",
      "CSS-in-JS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
    experience: 9,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Testing",
    list: ["Jest", "react-testing-library", "Cypress"],
    experience: 2,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Programming",
    list: ["OOP", "SOLID", "Functional Programing"],
    experience: 2,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },

  {
    technology: "Render",
    list: [
      "Accessibility",
      "SEO optimization",
      "Responsive design",
      "Mobile First",
    ],
    experience: 9,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Communication",
    list: ["REST api", "GraphQL", "Web Sockets"],
    experience: 9,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Mobile Applications",
    list: ["React Native"],
    experience: 9,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Databases",
    list: ["MySQL", "MongoDB"],
    experience: 9,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    technology: "Workflow",
    list: ["Agile", "Scrum"],
    experience: 9,
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

export default async function Skills() {
  return (
    <PageLayout
      title="Soft and Hard Skills"
      intro="LList of my skills and technologies that I am currently using or used earlier."
    >
      <div className=" mx-auto">
        <div className="flow-root">
          <ul role="list" className="grid grid-cols-12 w-full">
            {data.map((item) => (
              <li
                key={item.technology}
                className="col-span-12 md:col-span-5 md:even:col-start-7"
              >
                <div className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={clsx(
                          item.iconBackground,
                          "h-8 w-8 rounded-full flex items-center justify-center dark:bg-transparent"
                        )}
                      >
                        <item.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1">
                      <div>
                        <p className="text-lg font-bold text-gray-700 mb-1 dark:text-zinc-100">
                          {item.technology}
                        </p>
                        <div className="text-base text-gray-500 dark:text-zinc-400">
                          {item.list.map((listItem) => {
                            return <p key={listItem}>{listItem}</p>;
                          })}
                        </div>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {/*<span>{event.experience}</span>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
