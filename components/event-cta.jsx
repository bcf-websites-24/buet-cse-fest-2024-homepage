"use client";

import { CustomButton } from "./custom-button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const EventCTA = ({ href }) => {
  console.log(href);

  return (
    <div className="relative container bg-highlight rounded-xl w-full min-h-64 mb-16 mt-24 center">
      <div className="flex flex-col items-center">
        <p className="text-2xl md:text-4xl mb-6 text-center">
          Be a part of this amazing event.
        </p>
        <CustomButton blank variant="primary" className={""} link={href}>
          Register Now
        </CustomButton>
      </div>
      <BackgroundBeams />
    </div>
  );
};
