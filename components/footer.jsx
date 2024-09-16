import { FacebookIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="border-t mt-16 w-full">
      <div className="container flex justify-between items-center py-8 text-slate-400 w-full">
        <p className="">© 2024</p>

        <div className="flex gap-4 items-center">
          {links.map((link) => (
            <a href={link.href} target="blank" className="p-2">
              <Image
                src={link.icon}
                alt="icon"
                width={20}
                height={20}
                className="invert opacity-60"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    icon: "/images/envelope.svg",
    href: "mailto:",
  },
  {
    icon: "/images/facebook.svg",
    href: "https://facebook.com",
  },
  {
    icon: "/images/youtube.svg",
    href: "https://youtube.com",
  },
];
