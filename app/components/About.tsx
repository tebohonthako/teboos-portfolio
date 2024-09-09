// "use client" directive is necessary when you want to indicate that a 
// particular component should be rendered on the client-side instead of the server-side

// N E X T   R E N D E R S C  O M P O N N E N T S  O N   S E R V E R   S I D E  4  S E O  +  P E R F O R M A N C E  

'use client'   

import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img 
      initial={{x: -200,}}
      whileInView={{ x: 0,}}
      viewport={{ once: true}}
      src="/assets/teboooo.jpg"/> 
     

      {/* <img src="/assets/teboooo.jpg" alt="" /> */}
    </div>
  );
}

