import { Prose } from "@/components";

export const metadata = {
  title: "My story | Software Engineer, Front-End",
  description:
    "This is a story about how I began my Software Engineer career and became who I am.",
};

export default async function About() {
  return (
    <>
      <div className="mt-16 lg:mt-32">
        <div className="relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  My story
                </h1>
              </header>
              <Prose className="mt-8">
                <p>
                  Back in the day, when I was a student in school, I had an
                  incredible desire to have my personal computer. Don`t be
                  surprised, at that time in my country where I come from
                  (Ukraine), not everyone could afford to buy a computer. After
                  saving up money from all possible sources and with a little
                  help from my relatives, I had the long-awaited goal in my
                  room. It can be said that it was then that my journey into the
                  world of IT technologies began. I would be happy to share all
                  the details, but it would not be quite what I really wanted to
                  share with you.
                </p>
                <p>
                  I will leave three dots here, and maybe someday I will tell
                  this chapter of my life...
                </p>
                <p>
                  I will skip ahead to the moment in my life when I decided to
                  go into software development. My focus fell on PHP as my first
                  programming language, and my main resource became the official
                  documentation website, as well as video courses. My first
                  project was an online store, the logic of which I wrote from
                  scratch. After a certain period when I began to feel more
                  confident, I attempted to get a job, but it was unsuccessful.
                  It was during that period that I was finishing my studies at
                  the university, and on the advice of older friends, I decided
                  to try myself on freelance platforms.
                </p>
                <p>And here is where my story really began.</p>
                <p>
                  I registered on a popular freelance platform in my region and
                  started working. Most of the projects were related to
                  front-end development, and since I was still in university, I
                  realized that drawing complex mechanisms was my element. I
                  immersed myself in the process of learning and development
                  immediately. My main technologies were CSS, HTML, JavaScript,
                  specifically JQuery, and also the CMS WordPress. For simpler
                  projects, I used my own PHP code. At that time, Bootstrap was
                  a popular UI framework, and it was also my favorite if it was
                  a suitable solution for the project. SEO optimization, mobile
                  view of the website, deployment to hosting, and many other
                  tasks were within my responsibility.
                </p>
                <p>
                  After a while, I discovered the global platform Upwork, which
                  had its advantages and an incredibly large number of projects
                  of different types and complexity. It was extremely difficult
                  to get the first few projects. But then, after a few months, I
                  received the badges Raised Talent and later Top Talent. From
                  simple business card sites to real estate sales sites, it was
                  all very interesting for me, and the challenges I faced only
                  gave me the strength to move on. Almost 100% positive
                  feedback, great experience as a developer, tester, and other
                  roles as a single person, I am glad that I managed to work as
                  a freelancer.
                </p>
                <p>
                  About a year later, I decided that I wanted to work on a
                  product. And I had a great opportunity to work at RIA.com, the
                  largest marketplace for used cars in Ukraine, and also for
                  real estate sales and other things (like the Facebook
                  marketplace). I was part of a team that introduced Agile for
                  the first time, and it was an incredibly cool experience. On
                  the project, I mainly worked with Javascript. My main focus
                  was on the frontend, but I also worked on the backend with
                  Node.js.
                </p>
                <p>Coming soon...</p>
              </Prose>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
