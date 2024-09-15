import { CallToAction } from "./cta";
import { Events } from "./events";
import { Gallery } from "./gallery";
import { Hero } from "./hero";
import { Sponsors } from "./sponsors";
import { Videos } from "./videos";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Sponsors />
      <Events />
      <Videos />
      {/* <Gallery /> */}
      <CallToAction />
    </div>
  );
}
