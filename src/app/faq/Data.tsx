import React from "react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Prose } from "@/components";

export const data = [
  {
    category: "Organizational",
    questions: [
      {
        question:
          "Will you now or in the future require employment visa sponsorship?",
        answer: (
          <>
            The short answer is now YES, but in the future (after 2 years) this
            can be a case.
            <br />
            <br />
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InformationCircleIcon
                    className="h-5 w-5 text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-bold text-blue-700">
                    Here is explanation and my Case:
                  </h3>
                  <div className="mt-2 text-base text-blue-700">
                    <p>
                      The{" "}
                      <a
                        className="text-indigo-600 font-bold underline hover:no-underline"
                        href="https://www.uscis.gov/ukraine"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Uniting for Ukraine
                      </a>{" "}
                      program allows me to work in the US for the next two years
                      (till December 2024). That means I have the full right to
                      work here and do not require any sponsorship for a visa.
                    </p>
                    <br />
                    <p>
                      If the company is interested in long-term cooperation, it
                      would be appreciated if they could help me obtain a green
                      card.
                    </p>
                    <p>
                      This is the only option that works for me{" "}
                      <a
                        className="text-indigo-600 font-bold underline hover:no-underline"
                        href="https://www.uscis.gov/green-card/green-card-eligibility/green-card-for-employment-based-immigrants"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Green Card for Employment-Based Immigrants
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        question: "What is your current visa status",
        answer: (
          <Prose>
            My current visa status is <strong>Refuge from Ukraine</strong>.
            <br />
            Here you can read more about this program on the official USCIS
            site.{" "}
            <a
              className="text-indigo-600 font-bold"
              href="https://www.uscis.gov/ukraine"
              target="_blank"
              rel="noreferrer"
            >
              Uniting for Ukraine
            </a>
            .
          </Prose>
        ),
      },
      {
        question: "What type of work you prefer (Remote, Hybrid or On-site)",
        answer: (
          <Prose>
            I prefer working remotely or in a hybrid format where I would be
            required to come into the office a few days a week.
            <br />
          </Prose>
        ),
      },
      {
        question: "My current location, and And will I be ready to relocate",
        answer: (
          <Prose>
            Currently my location is West New York, New Jersey.
            <br />I am ready to relocate if it is a perfect match for both me
            and the company.
          </Prose>
        ),
      },
      {
        question: "Are you legally authorized to work in the US?",
        answer: (
          <Prose>
            I have the legal right to work in the United States and I have a
            work permit.
          </Prose>
        ),
      },
    ],
  },
  {
    category: "Personal",
    questions: [
      {
        question: "What am I looking for? The project, role, company, etc.",
        answer: (
          <Prose>
            <p>
              I am looking for new opportunities to work with and be part of a
              great product. To grow in parallel, share my experience, and learn
              new things.
            </p>
            <p>
              As a Front-End focused developer, I am going to grow in this
              direction. So the stack is all about JavaScript and Typescript,
              and the technologies can be almost whatever.
            </p>
            <p>Feel free to reach out to me, and let`s discuss this.</p>
          </Prose>
        ),
      },
    ],
  },
  // {
  //   category: "Work I've done",
  //   questions: [],
  // },
  // {
  //   category: "Others",
  //   questions: [],
  // },
];
