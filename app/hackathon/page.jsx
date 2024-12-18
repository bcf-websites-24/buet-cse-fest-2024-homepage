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
      date: "Oct 14",
    },
    {
      event: "Preliminary Round",
      location: "Online",
      date: "Oct 16",
    },
    {
      event: "Arrival",
      location: "ECE Building, BUET",
      date: "Oct 24 (08:00 AM)",
    },
    {
      event: "Onsite Round",
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
      prize: "35,000",
    },
    {
      label: "2nd Place",
      prize: "25,000",
    },
    {
      label: "3rd Place",
      prize: "15,000",
    },
    {
      label: "BUET Rising Team",
      prize: "8,000",
    },
    {
      label: "Best Documentation",
      prize: "8,000",
    },
    {
      label: "Best UI/UX",
      prize: "8,000",
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
      name: "Pridesys IT Ltd.",
      logo: "/images/sponsors/pridesys.png",
      status: "Co-Sponsor",
    },
    {
      name: "Computer Society",
      logo: "/images/sponsors/ieee-buet.png",
      status: "Co-host",
    },
  ];

  const resourcesData = [
    {
      videoSrc: "https://www.youtube.com/embed/sYc8Pk00vj0?si=9COIRcZQS3Qr6-TU",
      thumbnail: "https://img.youtube.com/vi/sYc8Pk00vj0/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/X460EXGW5nA?si=eWtCgkYFk7M0RxMR",
      thumbnail: "https://img.youtube.com/vi/X460EXGW5nA/hqdefault.jpg",
    },
  ];

  return (
    <>
      <div className="relative w-full">
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
          child2={<h3 className="font-semibold">2 Segments</h3>}
          child3={<h3 className="font-semibold">170K+ Prize Money</h3>}
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
