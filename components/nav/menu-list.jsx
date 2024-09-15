import { RocketIcon } from "lucide-react";
import Link from "next/link";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

const menus = [
  {
    name: "event 1",
    href: "/event1",
    icon: <RocketIcon size={16} />,
  },
  {
    name: "event 2",
    href: "/event2",
    icon: <RocketIcon size={16} />,
  },
  {
    name: "event 3",
    href: "/event3",
    icon: <RocketIcon size={16} />,
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
