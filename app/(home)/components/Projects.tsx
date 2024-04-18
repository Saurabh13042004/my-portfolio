"use client";
import Image from "next/image";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiCss3,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiFramer,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    
    {
      title: "Metaversus",
      tech: [SiNextdotjs, SiTailwindcss , SiFramer ],
      link: "https://github.com/Saurabh13042004/metaversus",
      cover: "/metaversus.png",
      background: "bg-green-500",
    },
    {
      title: "Prephelp",
      tech: [SiMongodb,SiExpress,SiReact,SiTailwindcss],
      link: "https://github.com/Saurabh13042004/prephelp",
      cover: "/prephelp.png",
      background: "bg-indigo-500",
    },
    {
      title: "HomeHub",
      tech: [SiReact,SiFirebase,SiCss3,SiLeaflet],
      link: "https://github.com/Saurabh13042004/house-marketplace",
      cover: "/homehub.png",
      background: "bg-green-500",
    },
    {
      title: "Github Finder",
      tech: [SiReact,SiTailwindcss,SiGithub,SiDaisyui],
      link: "https://github.com/Saurabh13042004/github-finder",
      cover: "/github-finder.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-8 h-8 " />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
