import { motion } from "framer-motion";
import React, { createContext } from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}

        className="flex flex-row items-center"
      >
        {/* S O C I A L   I C O N S  */}
        {/* T W I T T E R  */}
        {/* <SocialIcon
          url="https://x.com/tebooo_n"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        /> */}

        {/* T I K T O K  */}
        {/* <SocialIcon
          url="https://www.tiktok.com/@teboo.dev?lang=en"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        /> */}

        {/* I G  */}
        {/* <SocialIcon
          url="https://instagram.com"
          fgColor="gray"
          bgColor="transparent"
        /> */}

        {/* G I T H U B  */}
        <SocialIcon
          network="github"
          url="https://github.com/tebohonthako"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />

        {/* L I N K E D I N   */}
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/tebohonthako/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </div>

      {/* E M A I L  */}
      <div className="flex flex-row items-center text-gray-300">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </div>
    </header>
  );
}
