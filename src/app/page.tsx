import { PageLayout } from "@/components";
import { Work } from "@/app/Work";
import { Prose } from "@/components";

export const metadata = {
  title: "Software Engineer, Front-End | Serhii Bilous",
  description:
    "Hi, I am Serhii Bilous, a Software engineer and Javascript expert with over nine years of commercial experience. I am Front-End focused developer who is also doing a Back-end job.",
  colorScheme: "light",
  creator: "Serhii Bilous",
  openGraph: {
    images: [
      {
        url: "https://serhiibilous.com/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <PageLayout
        title="Software Engineer, Front-End"
        withSocial
        description={
          <>
            Hi, I am Serhii Bilous, a Software engineer and Javascript expert
            with over nine years of commercial experience. I am Front-End
            focused developer who is also doing a Back-end job. Here is my
            little story in case you want to know me better.
            <br />
            <em>
              A video introduction and examples of my work will come soon.
            </em>
          </>
        }
      >
        <div className="mt-16">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              {/*{articles.map((article) => (*/}
              {/*  <Article key={article.slug} article={article} />*/}
              {/*))}*/}
              <Prose>
                <h2 className="mt-2">
                  Introduction about me, my work and experiences.
                </h2>
                <p>
                  I am a senior software engineer with nine years of commercial
                  experience. I am Focusing on Front End and am an expert in
                  Javascript. Worked in different areas, such as e-commerce,
                  online documentation tools, traveling, marketplaces, taxes
                  services, and others. I am using Javascript and Typescript as
                  my main stack, including React and its ecosystem on the Front
                  side. And Node js and Express js on the Back end side of the
                  application. Rest API or GraphQl for communication and MySQL
                  and MongoDB as database architecture.
                </p>
                <p>
                  As a Senior developer, my responsibilities are not only to
                  produce high-quality code. It is such things as mentoring new
                  team members or people who want or need to learn something I
                  am an expert in. Do code review (in a way that the team can
                  update a way of developing). Build an architecture for the app
                  so it will be scalable, with excellent performance, and easy
                  to read and maintain. And, of course, talk to people and
                  communicate with teams such as Product, Design, Analytics, and
                  others. So I can be a good leader for the team, help them
                  achieve their goals, and solve any issue. I know how to follow
                  the rules or instructions or create them so each person in the
                  team or company can be on the same stage and way.
                </p>
                <p>
                  I learn new techniques and technologies daily. To ensure I`m
                  still catching up and that technologies are the best. Because
                  the world does not stand still.
                </p>
              </Prose>
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <>
                {/*<Newsletter />*/}
                <Work />
              </>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
