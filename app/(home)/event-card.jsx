"use client";

import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const EventCard = ({ event }) => {
  return (
    <div className="rounded-lg pb-4 max-w-sm h-full mx-auto text-center">
      <div className="p-6 relative h-auto">
        {/* <GridPattern
          className={cn(
            "[mask-image:radial-gradient(160px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        /> */}
        <Image
          src={event.image}
          height={200}
          width={400}
          className="z-50 md:h-full object-contain mx-auto rounded-lg"
        />
      </div>
      <div className="mt-2 p-8">
        <Link href={event.link}>
          <h3 className="text-2xl font-mono text-slate-100 font-semibold">
            {event.name}
          </h3>
        </Link>
        <p className="mt-4 text-slate-500">{event.description}</p>

        <p className="text-sm font-semibold mt-2 flex items-center justify-center">
          <CalendarIcon size={16} className="mr-2 text-slate-300" />
          <span className="text-slate-300">{event.date}</span>
        </p>

        {/* <Button
          size="icon"
          variant="outline"
          className="mx-auto rounded-full mt-4"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </Button> */}
      </div>
    </div>
  );
};
