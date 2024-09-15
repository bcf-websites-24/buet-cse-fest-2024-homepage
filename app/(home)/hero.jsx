"use client";

import { Carousel } from "@/components/carousel";
import { events } from "@/lib/data";
import { EventCard } from "./event-card";
import { CustomButton } from "@/components/custom-button";

export const Hero = () => {
  return (
    <div className="min-h-screen center pb-16 pt-32 md:pt-0 w-full">
      <div className="container w-full h-full">
        <div className="flex flex-col md:flex-row items-center w-full h-full gap-y-16 md:gap-y-0">
          <div className="w-full md:w-2/5 h-full center flex-col">
            {/* left */}
            <h1 className="text-5xl md:text-7xl font-semibold text-center tracking-wider">
              BUET
              <span className="relative z-10 inline-block mx-2 md:mx-5 mb-4">
                CSE
                {/* <div className="absolute -bottom-0 -left-1 -right-2.5 h-4 md:h-4 bg-primary -z-10"></div> */}
              </span>
              FEST
              <span className="text-5xl md:text-7xl ml-2 md:ml-5">2024</span>
            </h1>

            <p className="my-8 text-xl md:text-2xl text-slate-400">
              A Festival of Innovation and Creativity
            </p>

            <CustomButton className={""}>Our Facebook Event</CustomButton>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-start md:items-center justify-center">
            {/* right */}
            <Carousel className={"w-full md:w-2/3 flex flex-col"}>
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
