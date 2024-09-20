"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      name: "iRenew Ecommerce App",
      imageUrl: "/assets/IRENEWW.png",
      link: "https://github.com/tebohonthako/iRenew-store",
      description:""
    },
    {
      id: 2,
      name: "Cybersecurity Awareness Gamified App",
      imageUrl: "/assets/CYBERGIII.png",
      link: "https://social-dashboard.com",
      description:" My Team and I developed a gamified app that helps equip young professionals with the necessary cybersecurity awareness skills to fight cyber-crimes"
    },
    {
      id: 3,
      name: "React Movieland",
      imageUrl: "/assets/movieland.png",
      link: "https://teboos-movieland.netlify.app/",
      description:"Built a simplified version of FilmPire/Netflix. A single-page React app with a OMDB API that allows users to connect to a variety of movies"
    },
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-center md:flex-row md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              src={project.imageUrl}
              alt={project.name}
              className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[pink]/50 block">
                  <Link target="blank" href={project.link}>
                    {project.name}
                  </Link>
                </span>
              </h4>
            </div>

            <div className="text-xl space-y-10 px-0 md:px-10 max-w-6xl">
              {project.description}
            </div>
          </div>

          
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[pink]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
