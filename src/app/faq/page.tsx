import { PageLayout } from "@components";

import { Questions } from "./Questions";
import { data } from "./Data";

export const metadata = {
  title: "FAQ to Serhii Bilous | Software Engineer, Front-End",
  description:
    "A list of the most popular questions and answers. Please check it, and if you still have some questions left, let's talk and start cooperation.",
};

export default async function Faq() {
  return (
    <PageLayout
      title="Frequently asked questions"
      intro="A list of the most popular questions and answers. Please check it, and if you still have some questions left, let's talk and start cooperation."
    >
      <div className="mx-auto max-w-7xl pb-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="col-span-12">
            {data.map((category) => {
              return (
                <Questions
                  key={category.category}
                  title={category.category}
                  questions={category.questions}
                />
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
