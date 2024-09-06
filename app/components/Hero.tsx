"use client";

import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
// import {BackgroundCircles} from "../components/BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Teboo 😊",
      "Girl-who-loves-sushi.tsx 🍣",
      "ButLovesToCodeMore 💗👩🏽‍💻",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* <BackgroundCircles /> */}
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB04" />
      </h1>
    </div>
  );
}
