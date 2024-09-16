import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { CallToAction } from "./cta";
import { Events } from "./events";
import { Hero } from "./hero";
import { Sponsors } from "./sponsors";
import { Videos } from "./videos";
import { EventList } from "./event-list";

export default function Home() {
  return (
    <div className="w-full relative">
      <div className="block sm:hidden">
        <Hero />
      </div>

      <div className="hidden sm:block">
        <BackgroundGradientAnimation>
          <div className="bg-background/70 z-10 absolute inset-0">
            <Hero />
          </div>
        </BackgroundGradientAnimation>
      </div>
      <Sponsors />
      <EventList />
      <Events />
      <Videos />
      {/* <Gallery /> */}
      <CallToAction />
    </div>
  );
}
