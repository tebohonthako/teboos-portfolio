"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg ml-2 mr-3 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-55 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/assets/SHAPER.jpeg"
        alt="Shaper company logo"
      />

      <div className="px-0 md:px-0">
        {/* J O B    T I T L E  */}
        <h4 className="text-4xl font-light">Full-stack Developer</h4>

        {/* C O M P A N Y  */}
        <p className="font-bold text-2xl mt-1">Shaper</p>

        {/* T E C H    S T A C K  */}
        <div className="flex space-x-2 my-2">
          <img
            src="/assets/ts-Photoroom.png"
            width={50}
            height={32}
            alt="react logo"
          />
          <img
            src="/assets/react.png"
            width={32}
            height={32}
            alt="react logo"
          />
          <img src="/assets/git.png" width={32} height={32} alt="git logo" />

          {/* <img src="/assets/tail.png" width={35} height={35} alt="tailwind css logo" /> */}
          <img
            src="/assets/springb-Photoroom.png"
            width={35}
            height={35}
            alt=" springboot logo"
          />
          <img
            src="/assets/ngg-Photoroom.png"
            width={40}
            height={36}
            alt="git logo"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">April 2024 - Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
}
