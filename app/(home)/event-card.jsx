"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export const EventCard = ({ event }) => {
  return (
    <div className="rounded-[24px] pb-4 bg-highlight/70 max-w-sm h-full mx-0 md:mx-auto text-center">
      <div className="p-6">
        <Image
          src="/images/1.webp"
          height={400}
          width={400}
          className="h-[200px] md:h-full object-contain mx-auto rounded-t-[24px]"
        />
      </div>
      <div className="mt-6 p-4">
        <h3 className="text-2xl font-mono text-slate-100 font-semibold">
          {event.name}
        </h3>
        <p className="mt-4 text-slate-500">{event.description}</p>

        <Button
          size="icon"
          variant="outline"
          className="mx-auto rounded-full mt-4"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
