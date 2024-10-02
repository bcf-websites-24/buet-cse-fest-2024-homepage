import {
  BinaryIcon,
  BrainIcon,
  CameraIcon,
  CodeIcon,
  Dice5Icon,
  Gamepad2Icon,
  LandPlotIcon,
  LanguagesIcon,
  LaughIcon,
  LightbulbIcon,
  PresentationIcon,
  PuzzleIcon,
  ShovelIcon,
  TargetIcon,
  TerminalIcon,
  TheaterIcon,
} from "lucide-react";

export const allEvents = [
  {
    name: "IUPC",
    icon: <TerminalIcon size={36} className="" />,
  },
  {
    name: "Hackathon",
    icon: <CodeIcon size={36} className="" />,
  },
  {
    name: "Deep Learning Sprint",
    icon: <BrainIcon size={36} className="" />,
  },
  {
    name: "Gamejam",
    icon: <Gamepad2Icon size={36} className="" />,
  },
  {
    name: "Capture The Flag",
    icon: <BinaryIcon size={36} className="" />,
  },
  {
    name: "Poster Presentation",
    icon: <PresentationIcon size={36} className="" />,
  },
  {
    name: "Picture Puzzle",
    icon: <PuzzleIcon size={36} className="" />,
  },
  {
    name: "Treasure Hunt",
    icon: <ShovelIcon size={36} className="" />,
  },
  {
    name: "Photography Contest",
    icon: <CameraIcon size={36} className="" />,
  },
  {
    name: "Meme Contest",
    icon: <LaughIcon size={36} className="" />,
  },
  {
    name: "Takla Contest",
    icon: <LanguagesIcon size={36} className="" />,
  },
  {
    name: "Indoor Games",
    icon: <Dice5Icon size={36} className="" />,
  },
  {
    name: "Outdoor Games",
    icon: <LandPlotIcon size={36} className="" />,
  },
  {
    name: "Flashmob",
    icon: <TargetIcon size={36} className="" />,
  },
  {
    name: "Grand Cultural Night",
    icon: <TheaterIcon size={36} className="" />,
  },
];

export const events = [
  {
    name: "Deep Learning Sprint",
    description: "Deep Dive into Kaggle: A Month-Long DL Challenge!",
    icon: <BrainIcon size={18} />,
    color: "color4",
    image: "/images/event-list/hackathon.png",
    date: "Oct 5 - Nov 1",
    link: "/dl-sprint",
  },
  {
    name: "Poster Presentation",
    description: "Show Your Brilliance at Our Poster Presentation Session!",
    icon: <LightbulbIcon size={18} />,
    color: "accent",
    image: "/images/event-list/poster-presentation.png",
    date: "Oct 19",
    link: "/poster-presentation",
  },
  {
    name: "Hackathon",
    description: "Hack the Future: Unleash Your Innovation at Our Hackathon!",
    icon: <CodeIcon size={18} />,
    color: "primary",
    image: "/images/event-list/hackathon.png",
    date: "Oct 24 - Oct 25",
    link: "/hackathon",
  },
  {
    name: "Gamejam",
    description:
      "Game On! Join Our Epic Game Jam for an Unforgettable Experience!",
    icon: <Gamepad2Icon size={18} />,
    color: "color4",
    image: "/images/event-list/gamejam.png",
    date: "Oct 13 - Oct 26",
    link: "/gamejam",
  },
  {
    name: "Capture The Flag",
    description: "Capture the Flag: A Thrilling Adventure Awaits!",
    icon: <BinaryIcon />,
    color: "accent",
    image: "/images/event-list/ctf.png",
    date: "Oct 31",
    link: "/ctf",
  },
  {
    name: "IUPC",
    description: "Code Clash: Inter-University Programming Showdown!",
    icon: <CodeIcon size={18} />,
    color: "primary",
    image: "/images/event-list/iupc.png",
    date: "Nov 1",
    link: "/iupc",
  },
];

export const sponsors = [
  {
    name: "United Group",
    logo: "/images/sponsors/united.png",
    status: "Title-sponsor",
  },
  {
    name: "Therap",
    logo: "/images/sponsors/therap.png",
    status: "Bronze Sponsor",
  },
  {
    name: "Code Crafters",
    logo: "/images/sponsors/code-crafters.png",
    status: "Co-Sponsor",
  },
  {
    name: "Intelligent Machines",
    logo: "/images/sponsors/iml.png",
    status: "Co-Sponsor",
  },
];
