import { motion } from "framer-motion";
import React from "react";
import {images} from "./images"

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/assets/react.png"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:h-22 filter  transition duration-300 ease-in-out"
      ></motion.img>
      

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out h-24 w-24 md:h-24 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
        
        </div>
      </div>
    </div>
  );
}
