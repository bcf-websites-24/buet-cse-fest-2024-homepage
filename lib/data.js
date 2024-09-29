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
    image: "/images/1.webp",
    date: "Oct 5 - Nov 1",
    link: "/dl-sprint",
  },
  {
    name: "Poster Presentation",
    description: "Show Your Brilliance at Our Poster Presentation Session!",
    icon: <LightbulbIcon size={18} />,
    color: "accent",
    image: "/images/poster.jpg",
    date: "Oct 19",
    link: "/poster-presentation",
  },
  {
    name: "Hackathon",
    description: "Hack the Future: Unleash Your Innovation at Our Hackathon!",
    icon: <CodeIcon size={18} />,
    color: "primary",
    image: "/images/hackathon.svg",
    date: "Oct 24 - Oct 25",
    link: "/hackathon",
  },
  {
    name: "Gamejam",
    description:
      "Game On! Join Our Epic Game Jam for an Unforgettable Experience!",
    icon: <Gamepad2Icon size={18} />,
    color: "color4",
    image: "/images/gamejam.svg",
    date: "Oct 26",
    link: "/gamejam",
  },
  {
    name: "Capture The Flag",
    description: "Capture the Flag: A Thrilling Adventure Awaits!",
    icon: <BinaryIcon />,
    color: "accent",
    image: "/images/ctf.svg",
    date: "Oct 31",
    link: "/ctf",
  },
  {
    name: "IUPC",
    description: "Code Clash: Inter-University Programming Showdown!",
    icon: <CodeIcon size={18} />,
    color: "primary",
    image: "/images/iupc.jpg",
    date: "Nov 1",
    link: "/iupc",
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

export const timeLineData = {
  "dl-sprint": [
    {
      event: "Registration",
      location: "Online",
      date: "Oct 5 - Oct 10",
    },
    {
      event: "Phase 1",
      location: "Kaggle",
      date: "Oct 10 - Oct 25",
    },
    {
      event: "Phase 2",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
    {
      event: "Prize Giving",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
  ],

  "poster-presentation": [
    {
      event: "Online Registration",
      location: "Online",
      date: "Sep 24 - Oct 3 (11:59 PM)",
    },
    {
      event: "Online Submission Deadline",
      location: "Online",
      date: "Oct 9 (11:59 PM)",
    },
    {
      event: "Screening Result Announcement",
      location: "Online",
      date: "Oct 11",
    },
    {
      event: "Onsite Registration",
      location: "Online",
      date: "Oct 11 - Oct 16 (11:59 PM)",
    },
    {
      event: "Onsite Round",
      location: "ECE Building, BUET",
      date: "Oct 19 (02:30 PM)",
    },
  ],

  hackathon: [
    {
      event: "Registration",
      location: "Online",
      date: "Oct 5 - Oct 10",
    },
    {
      event: "Phase 1",
      location: "Kaggle",
      date: "Oct 10 - Oct 25",
    },
    {
      event: "Phase 2",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
    {
      event: "Prize Giving",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
  ],

  gamejam: [
    {
      event: "Registration",
      location: "Online",
      date: "Oct 5 - Oct 10",
    },
    {
      event: "Phase 1",
      location: "Kaggle",
      date: "Oct 10 - Oct 25",
    },
    {
      event: "Phase 2",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
    {
      event: "Prize Giving",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
  ],

  ctf: [
    {
      event: "Registration",
      location: "Online",
      date: "Oct 5 - Oct 10",
    },
    {
      event: "Phase 1",
      location: "Kaggle",
      date: "Oct 10 - Oct 25",
    },
    {
      event: "Phase 2",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
    {
      event: "Prize Giving",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
  ],

  iupc: [
    {
      event: "Registration",
      location: "Online",
      date: "Oct 5 - Oct 10",
    },
    {
      event: "Phase 1",
      location: "Kaggle",
      date: "Oct 10 - Oct 25",
    },
    {
      event: "Phase 2",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
    {
      event: "Prize Giving",
      location: "Dept. of CSE, BUET",
      date: "Nov 1",
    },
  ],
};

export const prizeMoney = {
  "dl-sprint": [
    {
      label: "1st Place",
      prize: "BDT 10,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 8,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 5,000",
    },
    {
      label: "BUET Rising Team",
      prize: "BDT 5,000",
    },
  ],

  "poster-presentation": [
    {
      label: "1st Place",
      prize: "BDT 10,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 8,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 5,000",
    },
    {
      label: "BUET Rising Team",
      prize: "BDT 5,000",
    },
  ],

  hackathon: [
    {
      label: "1st Place",
      prize: "BDT 100,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 50,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 25,000",
    },
    {
      label: "4th Place",
      prize: "BDT 10,000",
    },
    {
      label: "5th Place",
      prize: "BDT 5,000",
    },
  ],

  gamejam: [
    {
      label: "1st Place",
      prize: "BDT 100,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 50,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 25,000",
    },
    {
      label: "4th Place",
      prize: "BDT 10,000",
    },
    {
      label: "5th Place",
      prize: "BDT 5,000",
    },
  ],

  ctf: [
    {
      label: "1st Place",
      prize: "BDT 100,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 50,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 25,000",
    },
    {
      label: "4th Place",
      prize: "BDT 10,000",
    },
    {
      label: "5th Place",
      prize: "BDT 5,000",
    },
  ],

  iupc: [
    {
      label: "1st Place",
      prize: "BDT 100,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 50,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 25,000",
    },
    {
      label: "4th Place",
      prize: "BDT 10,000",
    },
    {
      label: "5th Place",
      prize: "BDT 5,000",
    },
  ],
};

export const faqData = {
  "dl-sprint": [
    {
      ques: "What is Deep Learning Sprint?",
      ans: "Deep Learning Sprint is a month-long deep learning challenge organized by BUET CSE Fest 2024. It is a platform for students to showcase their skills in the field of deep learning and machine learning.",
    },
    {
      ques: "How can I participate in the Deep Learning Sprint?",
      ans: "You can participate in the Deep Learning Sprint by registering on our website. The registration process is simple and free of cost.",
    },
    {
      ques: "What are the prizes for the Deep Learning Sprint?",
      ans: "The prizes for the Deep Learning Sprint are as follows: 1st Place: BDT 100,000, 2nd Place: BDT 50,000, 3rd Place: BDT 25,000, 4th Place: BDT 10,000, 5th Place: BDT 5,000.",
    },
    {
      ques: "When will the Deep Learning Sprint take place?",
      ans: "The Deep Learning Sprint will take place from October 5 to November 1, 2024.",
    },
  ],

  "poster-presentation": [
    {
      ques: "What is BUET CSE Fest 2024 - Poster Presentation?",
      ans: "BUET CSE Fest 2024 - Poster Presentation is an event where undergraduate students can showcase their research ideas, gain valuable feedback, and inspire future work. It is designed for both novice and advanced students in the field of computer science.",
    },
    {
      ques: "Who can participate in the Poster Presentation?",
      ans: "Undergraduate students from any institution and department can participate. Teams can consist of one or more members, with no upper limit on team size.",
    },
    {
      ques: "What are the key dates for the event?",
      ans: "Important dates include:\n- Online Registration Deadline: 11:59 PM, 3rd October 2024\n- Online Submission Deadline: 11:59 PM, 9th October 2024\n- Screening Result Announcement: 11th October 2024\n- Final Round Registration Deadline: 11:59 PM, 16th October 2024\n- Final Round: 19th October 2024 at BUET Campus.",
    },
    {
      ques: "What are the submission and participation fees?",
      ans: "There is no fee for online submission. For the onsite final round, the registration fee for a team of 1-3 members is 500 BDT, with an additional fee of 250 BDT for each member beyond 3.",
    },
    {
      ques: "What is the format for the submission?",
      ans: "Participants must submit their poster in PDF format for the first round online. Finalists will then be invited to present onsite at BUET, with the organizers handling the printing for the final round.",
    },
    {
      ques: "What are the prizes for the winners?",
      ans: "Exciting prize money awaits the winners of the final round.",
    },
    {
      ques: "How can I register for the event?",
      ans: "To register, fill out the form at https://forms.gle/gSCshPaCCY77Ge8h9. No fees are required for online registration.",
    },
    {
      ques: "What can I expect from the final round?",
      ans: "The final round is not just about presenting results, but also sharing ideas and receiving feedback from experienced academicians. It's an excellent opportunity for learning and refining research concepts.",
    },
  ],
  hackathon: [
    {
      ques: "What is Deep Learning Sprint?",
      ans: "Deep Learning Sprint is a month-long deep learning challenge organized by BUET CSE Fest 2024. It is a platform for students to showcase their skills in the field of deep learning and machine learning.",
    },
    {
      ques: "How can I participate in the Deep Learning Sprint?",
      ans: "You can participate in the Deep Learning Sprint by registering on our website. The registration process is simple and free of cost.",
    },
    {
      ques: "What are the prizes for the Deep Learning Sprint?",
      ans: "The prizes for the Deep Learning Sprint are as follows: 1st Place: BDT 100,000, 2nd Place: BDT 50,000, 3rd Place: BDT 25,000, 4th Place: BDT 10,000, 5th Place: BDT 5,000.",
    },
    {
      ques: "When will the Deep Learning Sprint take place?",
      ans: "The Deep Learning Sprint will take place from October 5 to November 1, 2024.",
    },
  ],

  gamejam: [
    {
      ques: "What is Deep Learning Sprint?",
      ans: "Deep Learning Sprint is a month-long deep learning challenge organized by BUET CSE Fest 2024. It is a platform for students to showcase their skills in the field of deep learning and machine learning.",
    },
    {
      ques: "How can I participate in the Deep Learning Sprint?",
      ans: "You can participate in the Deep Learning Sprint by registering on our website. The registration process is simple and free of cost.",
    },
    {
      ques: "What are the prizes for the Deep Learning Sprint?",
      ans: "The prizes for the Deep Learning Sprint are as follows: 1st Place: BDT 100,000, 2nd Place: BDT 50,000, 3rd Place: BDT 25,000, 4th Place: BDT 10,000, 5th Place: BDT 5,000.",
    },
    {
      ques: "When will the Deep Learning Sprint take place?",
      ans: "The Deep Learning Sprint will take place from October 5 to November 1, 2024.",
    },
  ],

  ctf: [
    {
      ques: "What is Deep Learning Sprint?",
      ans: "Deep Learning Sprint is a month-long deep learning challenge organized by BUET CSE Fest 2024. It is a platform for students to showcase their skills in the field of deep learning and machine learning.",
    },
    {
      ques: "How can I participate in the Deep Learning Sprint?",
      ans: "You can participate in the Deep Learning Sprint by registering on our website. The registration process is simple and free of cost.",
    },
    {
      ques: "What are the prizes for the Deep Learning Sprint?",
      ans: "The prizes for the Deep Learning Sprint are as follows: 1st Place: BDT 100,000, 2nd Place: BDT 50,000, 3rd Place: BDT 25,000, 4th Place: BDT 10,000, 5th Place: BDT 5,000.",
    },
    {
      ques: "When will the Deep Learning Sprint take place?",
      ans: "The Deep Learning Sprint will take place from October 5 to November 1, 2024.",
    },
  ],

  iupc: [
    {
      ques: "What is Deep Learning Sprint?",
      ans: "Deep Learning Sprint is a month-long deep learning challenge organized by BUET CSE Fest 2024. It is a platform for students to showcase their skills in the field of deep learning and machine learning.",
    },
    {
      ques: "How can I participate in the Deep Learning Sprint?",
      ans: "You can participate in the Deep Learning Sprint by registering on our website. The registration process is simple and free of cost.",
    },
    {
      ques: "What are the prizes for the Deep Learning Sprint?",
      ans: "The prizes for the Deep Learning Sprint are as follows: 1st Place: BDT 100,000, 2nd Place: BDT 50,000, 3rd Place: BDT 25,000, 4th Place: BDT 10,000, 5th Place: BDT 5,000.",
    },
    {
      ques: "When will the Deep Learning Sprint take place?",
      ans: "The Deep Learning Sprint will take place from October 5 to November 1, 2024.",
    },
  ],
};

export const resourcesData = {
  "dl-sprint": [
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
  ],

  "poster-presentation": [
    {
      videoSrc: "https://www.youtube.com/embed/IIr22p0jWjQ?si=PLKnwVCLIItqcvPe",
      thumbnail: "https://img.youtube.com/vi/IIr22p0jWjQ/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/dh0pJdgY6Lc?si=N39wAySX_z9546bL",
      thumbnail: "https://img.youtube.com/vi/dh0pJdgY6Lc/hqdefault.jpg",
    },
  ],

  hackathon: [
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
  ],
  gamejam: [
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
  ],

  ctf: [
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
  ],

  iupc: [
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/Os5yeavDblk?si=hpQpV8L02S5h1WlF",
      thumbnail: "https://img.youtube.com/vi/VQa5Koy_V1w/hqdefault.jpg",
    },
  ],
};
