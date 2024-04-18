"use client"
import Image from "next/image";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss , SiPython, SiPostgresql, SiMysql, SiAmazonaws} from "react-icons/si";


export default function Skils() {
  const skills = [
    {
      title: "React",
      Icon: SiReact,
    },
    {
      title: "NextJs",
      Icon: SiNextdotjs
    },
    {
      title: "TailwindCss",
      Icon: SiTailwindcss,
    },
    {
      title: "NodeJs",
      Icon: SiNodedotjs
    },
    {
      title: "MongoDB",
      Icon: SiMongodb
    },
    {
      title:"MySQL",
      Icon:SiMysql
    },
    {
      title: "Javascript",
      Icon: SiJavascript
    },
    {
      title:"Python",
      Icon:SiPython
    },
    {
      title:"AWS",
      Icon:SiAmazonaws
    }
    
  ]
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="Skills 🔪"  className="flex flex-col items-center justify-center -rotate-6"/>
      <HoverEffect items={skills}/>
    </div>
  );
}
