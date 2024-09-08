"use client";

import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Teboo 😊",
      "Girl-who-loves-sushi.tsx 🍣",
      "<ButLovesToCodeMore 💗👩🏽‍💻/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="/assets/tebz.jpg"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        alt="My Side Profile picture"
        width={150}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 mb-5 pb-3 tracking-[15px]">
          Full-stack Developer
        </h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB04" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            {" "}
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            {" "}
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            {" "}
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
