// "use client" directive is necessary when you want to indicate that a
// particular component should be rendered on the client-side instead of the server-side

// N E X T   R E N D E R S C  O M P O N N E N T S  O N   S E R V E R   S I D E  4  S E O  +  P E R F O R M A N C E

"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About me
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        src="/assets/teboooo.jpg"
        className="-mb-23 md:mb-o flex-shrink-0 w-60 h-60 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        id="motion-profilepic"
      />

      <div className="space-y-10 px-1 md:px-10 mt-8 mb-2">
        <h4 className="text-2xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#FF1493]/50">little</span>{" "}
          background{" "}
        </h4>
        <p className="text-xs md:text-sm text-justify ">
          Hi, I'm Teboho Nthako 💯, a passionate self-taught developer who
          transitioned into the tech industry nearly two years ago from a
          background in biological sciences, specifically genetics. 
          My curiosity for how online applications work, especially driven by my love for
          online shopping, sparked my journey into coding. I’m now a full-stack
          developer and had the opportunity to work as a coding mentor for
          bootcamp students and a junior developer in a small team for 9 months
          at a startup. I developed a deep love for front-end development,
          particularly React ❤️. <br />
          I also successfully completed a Systems
          Development NQF 5 Learnership with Absa and Shaper, where I gained
          experience working with technologies like Angular, TypeScript, Spring
          Boot, Java, PostgreSQL, Git, Docker, AWS, and Figma. Today, I share my
          journey as a tech content creator on TikTok, helping others navigate
          their way into the tech world just like I did. I’m passionate about inspiring
          the next wave of developers to make their own transitions into tech.
        </p>
      </div>
    </motion.div>
  );
}
