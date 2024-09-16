"use client";

import { Button } from "@/components/ui/button";
import { Lens } from "@/components/ui/lens";
import { events } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export const Events = () => {
  return (
    <div className="container">
      <h3 className="header mt-32">Team Competitions For All</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {events.map((event) => (
          <Event key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
};

// group-hover:bg-primary group-hover:bg-accent group-hover:bg-color4
// hover:border-primary/30 hover:border-accent/30 hover:border-color4/30
// hover:text-primary hover:text-accent hover:text-color4

const Event = ({ event }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={cn(
        "border rounded-xl relative border-border transition duration-200 group bg-highlight",
        `hover:border-${event.color}/30`
      )}
    >
      <div className="w-full p-6 z-10">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src={event.image}
            width={400}
            height={400}
            className="w-full h-full object-cover mx-auto rounded-xl"
          />
        </Lens>
      </div>
      <div className="w-full p-6 rounded-xl flex flex-col">
        <h3 className={cn("text-2xl font-semibold")}>{event.name}</h3>
        <p className="mt-6 text-slate-300">{event.description}</p>

        <div className="flex justify-between items-center mt-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "border-none rounded-md cursor-default bg-background transition duration-200",
              `group-hover:bg-${event.color}`
            )}
          >
            {event.icon}
          </Button>
          <Link
            href="/"
            className={cn(
              "text-sm font-semibold flex items-center gap-x-1 transition duration-200",
              `hover:text-${event.color}`
            )}
          >
            EXPLORE <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
