"use client";

import { useEffect, useState } from "react";
import { MenuList } from "./menu-list";
import { MobileNav } from "./mobile-nav";
import { NavLogo } from "./nav-logo";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  const [style, setStyle] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setStyle(
          "bg-gradient-to-b from-bg-white/80 to-bg-white/40 backdrop-blur"
        );
      } else {
        setStyle("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full fixed h-16 md:h-20 center z-50 transition-colors duration-300",
        style
      )}
    >
      <div className="container flex items-center justify-between">
        <NavLogo />
        <div className="ml-auto flex items-center">
          <div className="hidden md:block">
            <MenuList />
          </div>

          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};
