"use client"

import Image from "next/image";
import Link from "next/link";
import { MovingBorderBtn } from "./ui/moving-border";
import Title from "./Title";
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex  flex-col-reverse lg:gap-0 gap-14 lg:flex-row  items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Saurabh."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
     
          
        {"Based in India, I'm a"}       <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Fullstack developer',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'Frontend developer',
      1000,
      'Backend developer',
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  /> passionate about building a modern web application that users love.
          
        </p>
        <Link href="#contact-me" className="inline-block">
         <Title
          text = "Contact Me 📧"
         />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] ">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>💼 Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
