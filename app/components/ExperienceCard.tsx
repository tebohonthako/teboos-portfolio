"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg ml-2 mr-3 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-20 hover:opacity-100 opacity-55 cursor-pointer transition-opacity duration-200">
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
        className="w-32 h-32 p-2 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
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
          {/* <img
            src="/assets/springb-Photoroom.png"
            width={35}
            height={35}
            alt=" springboot logo"
          /> */}
          <img
            src="/assets/jv.png"
            width={35}
            height={35}
            alt=" JAVA"
          />
         
        </div>

        <p className="uppercase py-5 text-gray-300">April 2024 - Present</p>

        <ul className="list-disc space-y-4 ml-8 text-lg items-center ">
          <li>Sprint Planning and Execution: <br /> Actively participated in bi-weekly sprint planning sessions with a team of 5, contributing to the roadmap and defining deliverables for our group application. Played a key role in tracking progress and ensuring that development goals were met on time.</li>
          <li>JWT and Authentication Development: <br /> Designed and implemented JWT (JSON Web Token) authentication mechanisms to ensure secure user access and data protection within the application. Collaborated with the team to integrate these authentication processes effectively.</li>
          <li>Database Management: <br /> Managed and optimized database interactions, including schema design, query optimization, and data integrity. </li>
          <li>Front-End Development: <br /> Developed and maintained the front-end components of the application using modern web technologies. Ensured a user-friendly interface and seamless user experience through responsive design and interactive elements.</li>
        </ul>
      </div>
    </article>
  );
}
