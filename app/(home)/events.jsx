"use client";

import { Button } from "@/components/ui/button";
import { events } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Events = () => {
  return (
    <div className="container">
      <h3 className="header mt-48">Events For All</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {events.map((event) => (
          <Event key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
};

// bg-primary bg-secondary bg-color4
// border-primary/30 border-secondary/30 border-color4/30

const Event = ({ event }) => {
  return (
    <div
      className={cn("border rounded-xl relative", `border-${event.color}/30`)}
    >
      <div className="absolute inset-x-0 top-[60px] bottom-0 center opacity-0 hover:opacity-10 transition duration-200">
        <Image
          src={event.image}
          width={400}
          height={400}
          className="w-full h-full ml-auto object-contain mx-auto"
        />
      </div>
      <div className="w-full h-[300px] p-6 rounded-xl flex flex-col">
        <h3 className={cn("text-2xl font-semibold")}>{event.name}</h3>
        <p className="mt-6 text-slate-300">{event.description}</p>

        <div className="flex justify-between items-center mt-auto">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "border-none rounded-md cursor-default",
              `bg-${event.color}`
            )}
          >
            {event.icon}
          </Button>
          <Link
            href="/"
            className="text-xs font-semibold flex items-center gap-x-2"
          >
            EXPLORE <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};