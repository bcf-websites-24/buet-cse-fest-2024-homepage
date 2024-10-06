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
      event: "Registration",
      location: "Online",
      date: "Oct 7 - Oct 24",
    },
    {
      event: "Phase 1 Submission Deadline",
      location: "Online",
      date: "Oct 31",
    },
    {
      event: "Phase 2",
      location: "ECE Building, BUET",
      date: "TBD",
    },
  ];

  const prizeMoney = [
    {
      label: "1st Place",
      prize: "TBD",
    },
    {
      label: "2nd Place",
      prize: "TBD",
    },
    {
      label: "3rd Place",
      prize: "TBD",
    },
    {
      label: "BUET Rising Team",
      prize: "TBD",
    },
  ];

  const faqData = [
    {
      ques: "What is the primary goal of this competition?",
      ans: "To develop AI models capable of solving Bengali Math Olympiad problems.",
    },
    {
      ques: "Who can participate in the competition?",
      ans: "Teams of up to 5 members, including at most 1 professional or expert and the rest must be undergraduate students.",
    },
    {
      ques: "When is the registration deadline?",
      ans: "October 24, 2024.",
    },
    {
      ques: "What is the format of the competition?",
      ans: "The competition consists of two phases: an online phase from October 7 to 31, 2024, and an optional offline phase on November 6, 2024.",
    },
    {
      ques: "What kind of problems will the AI models need to solve?",
      ans: "The AI models will need to solve complex mathematical problems presented in Bengali.",
    },
    {
      ques: "What are the potential benefits of participating in this competition?",
      ans: "Participants will contribute to advancing AI's problem-solving abilities and potentially create valuable educational tools for Bangladeshi students.",
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
      name: "Computer Society",
      logo: "/images/sponsors/ieee-buet.png",
      status: "Co-host",
    },
  ];

  return (
    <>
      <div className="relative w-full">
        <EventHero
          title="Deep Learning Sprint"
          description={event.description}
          ctaPrimary={{
            label: "Event",
            href: "https://www.facebook.com/events/526640960010230",
          }}
          // ctaSpecial={{
          //   label: "Kaggle",
          //   href: "#",
          // }}
          // ctaSecondary={{
          //   label: "Rules",
          //   href: "#",
          // }}
          event={event}
        />

        <EventBanner
          child1={<h3 className="font-semibold">{event.date}</h3>}
          child2={<h3 className="font-semibold">2 phases</h3>}
          child3={<h3 className="font-semibold">Exciting Prize Money</h3>}
        />

        <Sponsors sponsors={sponsors} />

        <EventDescription
          description={
            "This competition is a pioneering effort to develop AI models capable of solving complex mathematical problems in Bengali, a low-resource language. By participating, you will contribute to advancing AI's problem-solving abilities and potentially create valuable educational tools for Bangladeshi students. The competition provides a unique opportunity to showcase your skills and be part of a groundbreaking development in the field of AI."
          }
        />

        <EventTimeLine timeLineData={timeLineData} />

        <EventPrize prizeData={prizeMoney} />

        <EventFaq faqData={faqData} />

        {/* <EventResources resources={resourcesData} /> */}

        {/* <EventCTA /> */}
      </div>
    </>
  );
}
