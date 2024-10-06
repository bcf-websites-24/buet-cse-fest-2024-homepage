import Marquee from "@/components/magicui/marquee";
import { SponsorCard } from "@/components/sponsor-card";

export const Sponsors = ({ sponsors }) => {
  return (
    <div className="container">
      <h3 className="header mt-24">Our Sponsors & Partners</h3>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg pb-16">
        <Marquee pauseOnHover className="[--duration:20s]">
          {sponsors.map((sponsor, index) => (
            <SponsorCard sponsor={sponsor} key={index} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 lg:w-48 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 lg:w-48 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  );
};
