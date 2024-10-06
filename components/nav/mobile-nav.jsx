"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { KanbanIcon } from "lucide-react";
import { MenuList } from "./menu-list";
import { NavLogo } from "./nav-logo";
import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger className="ml-3" onClick={() => setIsOpen(true)}>
        <KanbanIcon className="rotate-90" />
      </SheetTrigger>
      <SheetContent
        className="w-full bg-background border-none"
        onClick={() => setIsOpen(false)}
      >
        <SheetHeader>
          {/* <SheetTitle className={"mb-4"}>
            <NavLogo />
          </SheetTitle> */}
          <div className="center mb-4">
            <NavLogo className={"ml-0"} />
          </div>
          <MenuList />
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
