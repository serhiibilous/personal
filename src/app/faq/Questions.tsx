"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

interface Questions {
  questions: any[];
  title: string;
}

export function Questions({ questions, title }: Questions) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        {title}
      </h2>
      <dl className=" space-y-6 divide-y divide-gray-900/10">
        {questions.map((question) => (
          <Disclosure as="div" key={question.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-zinc-100">
                    <span className="text-base font-semibold leading-7">
                      {question.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600 dark:text-zinc-400">
                    {question.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
