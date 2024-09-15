import Marquee from "@/components/magicui/marquee";
import { SponsorCard } from "@/components/sponsor-card";
import { sponsors } from "@/lib/data";

export const Sponsors = () => {
  return (
    <div className="container">
      <h3 className="header mt-24">Our Sponsors & Partners</h3>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {sponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} key={index} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 -left-2 w-32 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 -right-4 w-32 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  );
};
