"use client";

import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
// import {BackgroundCircles} from "../components/BackgroundCircles";


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Teboo",
      "Girl-who-loves-sushi.tsx 🍣",
      "ButLovesToCodeMore 💗👩🏽‍💻",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
        {/* <BackgroundCircles /> */}
      <h1>
        <p>{text}</p>
        <Cursor cursorColor="pink" />
      </h1>
    </div>
  );
}
