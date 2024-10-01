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
  const event = events[2];

  const timeLineData = [
    {
      event: "Registration Deadline",
      location: "Online",
      date: "Oct 14",
    },
    {
      event: "Workshop",
      location: "Online",
      date: "Oct 7, 8",
    },
    {
      event: "Preliminary Round",
      location: "Online",
      date: "Oct 15",
    },
    {
      event: "Arrival",
      location: "ECE Building, BUET",
      date: "Oct 24 (08:00 AM)",
    },
    {
      event: "Sprint",
      location: "ECE Building, BUET",
      date: "Oct 24 (09:00 AM) - Oct 25 (09:00 AM)",
    },
    {
      event: "Job Seminar",
      location: "ECE Building, BUET",
      date: "Oct 25 (10:00 AM - 12:45 PM)",
    },
    {
      event: "Final Judgement",
      location: "ECE Building, BUET",
      date: "Oct 25 (02:15 PM - 06:00 PM)",
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
      ques: "What is BUET CSE Fest 2024?",
      ans: "A two-day hackathon event organized by the Department of Computer Science and Engineering, BUET.",
    },
    {
      ques: "When is the hackathon?",
      ans: "October 24-25, 2024",
    },
    {
      ques: "What are the segments for the hackathon?",
      ans: "(i) API and AI, (ii) Microservice and Devops",
    },
    {
      ques: "What are the registration fees?",
      ans: "1000 BDT for each team",
    },
    {
      ques: "When is the registration deadline?",
      ans: "October 14, 2024",
    },
    {
      ques: "How can I register for the hackathon?",
      ans: "Through the link https://forms.gle/dPbwzCFLEn7wbKTd6",
    },
  ];

  const sponsors = [
    {
      name: "Therap",
      logo: "/images/sponsors/therap.webp",
      status: "Bronze-sponsor",
    },
    {
      name: "Computer Society",
      logo: "/images/sponsors/ieee-buet.png",
      status: "Co-host",
    },
  ];

  const resourcesData = [
    {
      videoSrc: "https://www.youtube.com/embed/2dwViBve148?si=No33OPxtEmXb0P1Q",
      thumbnail: "https://img.youtube.com/vi/2dwViBve148/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/3pMaR4Vmdo0?si=s58aHFbe0UbDMLUv",
      thumbnail: "https://img.youtube.com/vi/3pMaR4Vmdo0/hqdefault.jpg",
    },
  ];

  return (
    <>
      <div className="relative">
        <EventHero
          title="Hackathon"
          description={event.description}
          ctaPrimary={{
            label: "Register",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSc6COSmwS1jaKA1ukOwN7_lmgcORy4LPHG-byZEXbntKYH_6Q/viewform",
          }}
          ctaSecondary={{
            label: "Rules",
            href: "https://drive.google.com/file/d/1w_wlXTBiS-zMr6dNpgtlCVgmZva_63wp/view",
          }}
          event={event}
        />

        <EventBanner
          child1={<h3 className="font-semibold">{event.date}</h3>}
          child2={<h3 className="font-semibold">3 Segments</h3>}
          child3={<h3 className="font-semibold">Exciting Prize Money</h3>}
        />

        <Sponsors sponsors={sponsors} />

        <EventDescription
          description={
            "BUET CSE Fest 2024 is a tech event organized by the Department of Computer Science and Engineering, BUET. The highlight of the event is a 24-hour hackathon, where participants will compete in teams to create innovative solutions. The hackathon will feature two segments: API and AI, and Microservice and Devops. There will also be workshops, mentorship, and exciting prizes."
          }
        />

        <EventTimeLine timeLineData={timeLineData} />

        <EventPrize prizeData={prizeMoney} />

        <EventFaq faqData={faqData} />

        <EventResources resources={resourcesData} />

        <EventCTA href="https://docs.google.com/forms/d/e/1FAIpQLSc6COSmwS1jaKA1ukOwN7_lmgcORy4LPHG-byZEXbntKYH_6Q/viewform" />
      </div>
    </>
  );
}
