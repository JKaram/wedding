import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Title from "../commons/Title";
export default function About() {
  return (
    <section>
      <Title>Frequently asked questions</Title>
      <Question
        question="Is there a shuttle?"
        answer="I'm baby fingerstache vape irony cold-pressed. Tofu bespoke hot chicken, four loko bicycle rights portland quinoa tbh sartorial mlkshk synth hella hexagon leggings kinfolk. Fashion axe williamsburg tacos mumblecore kogi chambray tattooed cred. Squid hashtag typewriter church-key, normcore letterpress cliche single-origin coffee tilde. Dreamcatcher YOLO seitan quinoa kickstarter."
      />
      <Question
        question="Is there a shuttle?"
        answer="I'm baby fingerstache vape irony cold-pressed. Tofu bespoke hot chicken, four loko bicycle rights portland quinoa tbh sartorial mlkshk synth hella hexagon leggings kinfolk. Fashion axe williamsburg tacos mumblecore kogi chambray tattooed cred. Squid hashtag typewriter church-key, normcore letterpress cliche single-origin coffee tilde. Dreamcatcher YOLO seitan quinoa kickstarter."
      />
    </section>
  );
}

const Question = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`py-2 flex justify-between w-full`}>
            <h1>{question}</h1>
            <ChevronDownIcon className={`py-2 transition-all w-5 ease-out ${open && "transform rotate-180"}`} />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="text-gray-500">{answer}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
