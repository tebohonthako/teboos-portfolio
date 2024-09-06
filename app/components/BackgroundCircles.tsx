import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <div>
        <div className="border border-red-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>
        <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52 "></div>
        <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52 animate-pulse"></div>
        <div></div>
        <div></div>
    </div>
  )
}