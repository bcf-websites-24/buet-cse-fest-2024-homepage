import { EventBanner } from "@/components/event-banner";
import { EventHero } from "@/components/event-hero";

import {
  events,
  faqData,
  prizeMoney,
  resourcesData,
  sponsors,
  timeLineData,
} from "@/lib/data";
import { Sponsors } from "../(home)/sponsors";
import { EventDescription } from "@/components/event-description";
import { EventTimeLine } from "@/components/event-timeline";
import { EventPrize } from "@/components/event-prize";
import { EventFaq } from "@/components/event-faq";
import { EventResources } from "@/components/event-resources";
import { EventCTA } from "@/components/event-cta";

export default function DLSprintPage() {
  const event = events[4];

  return (
    <>
      <div className="relative">
        <EventHero
          title="Capture The Flag"
          description={event.description}
          ctaPrimary={{
            label: "Register",
            href: "#",
          }}
          ctaSecondary={{
            label: "Rules",
            href: "#",
          }}
          event={event}
        />

        <EventBanner
          child1={<h3 className="font-semibold">{event.date}</h3>}
          child2={<h3 className="font-semibold">3 Categories</h3>}
          child3={<h3 className="font-semibold">100K Prize Money</h3>}
        />

        <Sponsors sponsors={sponsors} />

        <EventDescription
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse cum corporis deserunt provident modi magni temporibus maxime minima deleniti sapiente! Et, facere! Suscipit quo perferendis hic ut repellat facilis ipsa ullam eius! Culpa temporibus voluptas ipsum ratione! Quisquam natus accusamus temporibus iure. Repellendus architecto, quo libero quis, assumenda molestias explicabo porro dolore excepturi magnam repellat, itaque sint perspiciatis! Obcaecati velit mollitia ipsa ea ducimus nemo eaque enim iusto facilis soluta officiis, vitae corporis laborum aut quisquam illum vel eveniet, eius dolore! Repellat ullam natus laborum quibusdam, ex corrupti corporis possimus ad? Eveniet rem pariatur asperiores quos autem vitae hic repellendus."
          }
        />

        <EventTimeLine timeLineData={timeLineData["ctf"]} />

        <EventPrize prizeData={prizeMoney["ctf"]} />

        <EventFaq faqData={faqData["ctf"]} />

        <EventResources resources={resourcesData["ctf"]} />

        <EventCTA />
      </div>
    </>
  );
}
