import {
  BinaryIcon,
  BrainIcon,
  CodeIcon,
  Gamepad2Icon,
  LightbulbIcon,
  PyramidIcon,
  RocketIcon,
} from "lucide-react";
import Link from "next/link";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

const menus = [
  {
    name: "DL Sprint",
    href: "/dlsprint",
    icon: <BrainIcon size={16} />,
  },
  {
    name: "Poster Presentation",
    href: "/poster-presentation",
    icon: <LightbulbIcon size={16} />,
  },
  {
    name: "Hackathon",
    href: "/hackathon",
    icon: <RocketIcon size={16} />,
  },
  {
    name: "GameJam",
    href: "/gamejam",
    icon: <Gamepad2Icon size={16} />,
  },
  {
    name: "CTF",
    href: "/ctf",
    icon: <BinaryIcon size={16} />,
  },
  {
    name: "IUPC",
    href: "/iupc",
    icon: <CodeIcon size={16} />,
  },
];

export const MenuList = () => {
  return (
    <div className="flex flex-col items-center md:flex-row text-lg gap-x-0 md:gap-x-4 gap-y-2 md:gap-y-0">
      {menus.map((menu, index) => (
        <Link
          href={menu.href}
          className="flex gap-x-2 items-center hover:bg-slate-700 px-3 py-1.5 rounded-full transition duration-200"
          key={index}
        >
          {menu.icon}
          <p>{menu.name}</p>
        </Link>
      ))}
      <Link href="/sign-up" className="font-semibold">
        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#59b5f8] via-[#3bbb96] to-[#59b5f8] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Facebook Event
          </span>
        </AnimatedGradientText>
      </Link>
    </div>
  );
};
