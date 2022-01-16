import React from "react";
import Button from "../commons/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="hidden">
        <Image src="/engament.jpg" layout="fill" objectFit="cover" alt="engament" />
      </div>
      <div className="flex flex-col pb-2">
        <h2>
          Jamie <strong className="text-gem">&amp;</strong> Christina
        </h2>
        <div>
          <time>July 22, 2022</time>
          <h1 className="text-4xl font-serif">
            Save the Date <span className="text-2xl text-gem">.</span>
          </h1>
          <div className="text-gray-400">
            <p>
              Hi. As most of you may know, we are getting married soon! And we&apos;d like to cordially invite you to
              join us in the beautiful Auqatopia Venue for an evening celebration.
            </p>
            <p>
              If you think you can make it to our big day, do fill up your details below so we can make sure you have a
              great seat to enjoyt the party and food.
            </p>
          </div>
          <div className="mt-3">
            <Button onClick={() => alert("clicked")}>RSVP</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
