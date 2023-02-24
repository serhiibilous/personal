import { Prose, PageLayout } from "@/components";
import { Work } from "@/app/Work";

export const metadata = {
  title:
    "Resume and Introduction | Software Engineer, Front-End | Serhii Bilous",
  description: "Software Engineer, Front-End | Serhii Bilous",
};

export default async function Resume() {
  return (
    <PageLayout
      title="Resume and Introduction"
      intro=" Introduction about me, my work and experiences."
    >
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          <Prose>
            <p className="mt-2">
              I am a senior software engineer with nine years of commercial
              experience. I am Focusing on Front End and am an expert in
              Javascript. Worked in different areas, such as e-commerce, online
              documentation tools, traveling, marketplaces, taxes services, and
              others. I am using Javascript and Typescript as my main stack,
              including React and its ecosystem on the Front side. And Node js
              and Express js on the Back end side of the application. Rest API
              or GraphQl for communication and MySQL and MongoDB as database
              architecture.
            </p>
            <p>
              As a Senior developer, my responsibilities are not only to produce
              high-quality code. It is such things as mentoring new team members
              or people who want or need to learn something I am an expert in.
              Do code review (in a way that the team can update a way of
              developing). Build an architecture for the app so it will be
              scalable, with excellent performance, and easy to read and
              maintain. And, of course, talk to people and communicate with
              teams such as Product, Design, Analytics, and others. So I can be
              a good leader for the team, help them achieve their goals, and
              solve any issue. I know how to follow the rules or instructions or
              create them so each person in the team or company can be on the
              same stage and way.
            </p>
            <p>
              I learn new techniques and technologies daily. To ensure I`m still
              catching up and that technologies are the best. Because the world
              does not stand still.
            </p>
          </Prose>
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <>
            <Work />
          </>
        </div>
      </div>
    </PageLayout>
  );
}
