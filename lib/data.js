import { color } from "framer-motion";
import { BinaryIcon, CodeIcon, Gamepad2Icon } from "lucide-react";

export const events = [
  {
    name: "Hackathon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis.",
    icon: <CodeIcon size={18} />,
    color: "primary",
    image: "/images/developer.webp",
  },
  {
    name: "Capture The Flag",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis.",
    icon: <BinaryIcon />,
    color: "accent",
    image: "/images/ctf.webp",
  },
  {
    name: "Gamejam",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis.",
    icon: <Gamepad2Icon size={18} />,
    color: "color4",
    image: "/images/game.webp",
  },
];

export const sponsors = [
  {
    name: "BJIT",
    logo: "/images/sponsors/bjit.png",
    status: "Co-sponsor",
  },
  {
    name: "Somoy",
    logo: "/images/sponsors/somoy.png",
    status: "Media Partner",
  },
];
