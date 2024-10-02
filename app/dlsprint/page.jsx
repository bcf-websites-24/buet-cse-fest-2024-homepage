import { EventBanner } from "@/components/event-banner";
import { EventHero } from "@/components/event-hero";

import { events } from "@/lib/data";
import { Sponsors } from "../(home)/sponsors";
import { EventDescription } from "@/components/event-description";
import { EventTimeLine } from "@/components/event-timeline";
import { EventPrize } from "@/components/event-prize";
import { EventFaq } from "@/components/event-faq";
import { EventResources } from "@/components/event-resources";
import { EventCTA } from "@/components/event-cta";

export default function DLSprintPage() {
  const event = events[0];

  const timeLineData = [
    {
      event: "Registration Deadline",
      location: "Online",
      date: "TBD",
    },
    {
      event: "Phase 1",
      location: "Online",
      date: "Oct 13 - 17",
    },
    {
      event: "Phase 2",
      location: "ECE Building, BUET",
      date: "Oct 26",
    },
  ];

  const prizeMoney = [
    {
      label: "1st Place",
      prize: "BDT 30,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 20,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 12,000",
    },
    {
      label: "BUET Rising Team",
      prize: "BDT 8,000",
    },
  ];

  const faqData = [
    {
      ques: "What is BUET CSE FEST 2024 Game Jam?",
      ans: "A hybrid event designed to foster creativity and innovation in game development.",
    },
    {
      ques: "What is the format of the Game Jam?",
      ans: "A two-phase competition: Online Qualifying Round followed by On-site Final Round.",
    },
    {
      ques: "When is the Online Qualifying Round?",
      ans: "October 13-17, 2024",
    },
    {
      ques: "When is the On-site Final Round?",
      ans: "October 26, 2024",
    },
    {
      ques: "Where will the On-site Final Round be held?",
      ans: "ECE Building, BUET, Palashi, Dhaka",
    },
    {
      ques: "What is the theme/prompt for the game development?",
      ans: "It will be announced at the start of the Online Qualifying Round.",
    },
    {
      ques: "What is the duration of the Online Qualifying Round?",
      ans: "4 days",
    },
    {
      ques: "Are there any prizes for the Game Jam?",
      ans: "Yes, there will be an exciting prize pool for the winners.",
    },
  ];

  const resourcesData = [
    {
      videoSrc: "https://www.youtube.com/embed/gqCAeFjB8Uo?si=RY-rlMuVjrFM2SM7",
      thumbnail: "https://img.youtube.com/vi/gqCAeFjB8Uo/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/tYxZ_LOlFnU?si=3GiATfzN5csKdVu2",
      thumbnail: "https://img.youtube.com/vi/tYxZ_LOlFnU/hqdefault.jpg",
    },
  ];

  const sponsors = [
    {
      name: "United Group",
      logo: "/images/sponsors/united.png",
      status: "Title Sponsor",
    },
    {
      name: "Therap",
      logo: "/images/sponsors/therap.png",
      status: "Bronze-sponsor",
    },
    {
      name: "Code Crafters",
      logo: "/images/sponsors/code-crafters.png",
      status: "Co-sponsor",
    },
    {
      name: "Computer Society",
      logo: "/images/sponsors/ieee-buet.png",
      status: "Co-host",
    },
  ];

  return (
    <>
      <div className="relative">
        <EventHero
          title="Deep Learning Sprint"
          description={event.description}
          ctaPrimary={{
            label: "Register",
            href: "#",
          }}
          ctaSpecial={{
            label: "Kaggle",
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
          child2={<h3 className="font-semibold">2 phases</h3>}
          child3={<h3 className="font-semibold">100K Prize Money</h3>}
        />

        <Sponsors sponsors={sponsors} />

        <EventDescription
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse cum corporis deserunt provident modi magni temporibus maxime minima deleniti sapiente! Et, facere! Suscipit quo perferendis hic ut repellat facilis ipsa ullam eius! Culpa temporibus voluptas ipsum ratione! Quisquam natus accusamus temporibus iure. Repellendus architecto, quo libero quis, assumenda molestias explicabo porro dolore excepturi magnam repellat, itaque sint perspiciatis! Obcaecati velit mollitia ipsa ea ducimus nemo eaque enim iusto facilis soluta officiis, vitae corporis laborum aut quisquam illum vel eveniet, eius dolore! Repellat ullam natus laborum quibusdam, ex corrupti corporis possimus ad? Eveniet rem pariatur asperiores quos autem vitae hic repellendus."
          }
        />

        <EventTimeLine timeLineData={timeLineData} />

        <EventPrize prizeData={prizeMoney} />

        <EventFaq faqData={faqData} />

        <EventResources resources={resourcesData} />

        <EventCTA />
      </div>
    </>
  );
}
