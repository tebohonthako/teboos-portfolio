"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
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
      className="h-screen flex flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center relative overflow-hidden"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory justify-center py-10">
        <ExperienceCard />
        {/* Add more ExperienceCard components if needed */}
      </div>
    </motion.div>
  );
}
