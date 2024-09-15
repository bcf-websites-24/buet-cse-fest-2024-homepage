import { RocketIcon } from "lucide-react";
import Link from "next/link";

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
          className="flex gap-x-2 items-center hover:bg-highlight px-3 py-1.5 rounded transition duration-200"
          key={index}
        >
          {menu.icon}
          <p>{menu.name}</p>
        </Link>
      ))}
      <Link
        href="/sign-up"
        className="px-6 py-1.5 mt-2 md:mt-0 rounded-full bg-primary text-highlight font-semibold"
      >
        Facebook Event
      </Link>
    </div>
  );
};
