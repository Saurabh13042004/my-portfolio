import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className ?: string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/sv17673/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/Saurabh13042004/",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://www.instagram.com/saurabh._shukla._/",
      label: "Instagram",
      Icon: SiInstagram,
    },
  ];

  return (
    <nav className={cn("py-10 animate-move-down flex justify-between items-center",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Saurabh 🧑‍💻
      </h1>
      <div className=" flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
