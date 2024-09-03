"use client";

import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My Name is Teboho aka Teboo.dev", "Girl-who-loves-sushi.tsx 🍣", "ButLovesToCodeMore 💗👩🏽‍💻"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div>
        <p>{text}</p>
        <Cursor cursorColor='pink'/> 

    </div>
  )
}

