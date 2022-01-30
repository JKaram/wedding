import React, { useState } from "react";
import Button from "../commons/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ scrollDown }: { scrollDown: () => void }) {
  const [show, setToggle] = useState(false);
  return (
    <div className="flex  h-screen md:h-auto">
      <div className="flex flex-col relative pb-2 justify-between">
        <div className="hidden md:block absolute -left-32 -rotate-90 top-1/2">#StokedtobeKaram</div>
        <div className="">
          <motion.div
            className="absolute text-white z-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <h2 className="text-white md:text-black">
              Jamie <strong className="text-gem">&amp;</strong> Christina
            </h2>
          </motion.div>
          <div className="md:hidden h-1/2">
            <img src="/engament.jpg" alt="engament" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="h-full mt-4 space-y-4 flex flex-col justify-center"
        >
          <div className="">
            <time className="text-sm">July 22, 2022</time>
            <div className="flex items-end">
              <h1 className="text-4xl font-serif m-0 p-0 leading-none">Save the Date</h1>
              <div className="rounded-full h-2 w-2 mb-1 ml-1 bg-gem"></div>
            </div>
          </div>
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
          <div className="">
            <Button onClick={() => scrollDown()}>RSVP</Button>
          </div>
        </motion.div>
        <div className=""></div>
      </div>
      <div className="hidden md:block py-1">
        <img src="/engament.jpg" alt="engament" />
      </div>
    </div>
  );
}
