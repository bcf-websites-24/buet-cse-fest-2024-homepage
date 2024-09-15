import Marquee from "@/components/magicui/marquee";
import { sponsors } from "@/lib/data";

export const Sponsors = () => {
  return (
    <div className="mt-32 container">
      <h3 className="header">Our Sponsors & Partners</h3>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="h-64 w-64 border-2 rounded-xl center">
              Sponsor
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 -left-2 w-32 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 -right-4 w-32 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  );
};
