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
  const event = events[1];

  const timeLineData = [
    {
      event: "Online Registration",
      location: "Online",
      date: "Sep 24 - Oct 3 (11:59 PM)",
    },
    {
      event: "Online Submission Deadline",
      location: "Online",
      date: "Oct 9 (11:59 PM)",
    },
    {
      event: "Screening Result Announcement",
      location: "Online",
      date: "Oct 11",
    },
    {
      event: "Onsite Registration",
      location: "Online",
      date: "Oct 11 - Oct 16 (11:59 PM)",
    },
    {
      event: "Onsite Round",
      location: "ECE Building, BUET",
      date: "Oct 19 (02:30 PM)",
    },
  ];

  const prizeMoney = [
    {
      label: "1st Place",
      prize: "BDT 10,000",
    },
    {
      label: "2nd Place",
      prize: "BDT 8,000",
    },
    {
      label: "3rd Place",
      prize: "BDT 5,000",
    },
    {
      label: "BUET Rising Team",
      prize: "BDT 5,000",
    },
  ];

  const faqData = [
    {
      ques: "What is BUET CSE Fest 2024 - Poster Presentation?",
      ans: "BUET CSE Fest 2024 - Poster Presentation is an event where undergraduate students can showcase their research ideas, gain valuable feedback, and inspire future work. It is designed for both novice and advanced students in the field of computer science.",
    },
    {
      ques: "Who can participate in the Poster Presentation?",
      ans: "Undergraduate students from any institution and department can participate. Teams can consist of one or more members, with no upper limit on team size.",
    },
    {
      ques: "What are the key dates for the event?",
      ans: "Important dates include:\n- Online Registration Deadline: 11:59 PM, 3rd October 2024\n- Online Submission Deadline: 11:59 PM, 9th October 2024\n- Screening Result Announcement: 11th October 2024\n- Final Round Registration Deadline: 11:59 PM, 16th October 2024\n- Final Round: 19th October 2024 at BUET Campus.",
    },
    {
      ques: "What are the submission and participation fees?",
      ans: "There is no fee for online submission. For the onsite final round, the registration fee for a team of 1-3 members is 500 BDT, with an additional fee of 250 BDT for each member beyond 3.",
    },
    {
      ques: "What is the format for the submission?",
      ans: "Participants must submit their poster in PDF format for the first round online. Finalists will then be invited to present onsite at BUET, with the organizers handling the printing for the final round.",
    },
    {
      ques: "What are the prizes for the winners?",
      ans: "Exciting prize money awaits the winners of the final round.",
    },
    {
      ques: "How can I register for the event?",
      ans: "To register, fill out the form at https://forms.gle/gSCshPaCCY77Ge8h9. No fees are required for online registration.",
    },
    {
      ques: "What can I expect from the final round?",
      ans: "The final round is not just about presenting results, but also sharing ideas and receiving feedback from experienced academicians. It's an excellent opportunity for learning and refining research concepts.",
    },
  ];

  const resourcesData = [
    {
      videoSrc: "https://www.youtube.com/embed/IIr22p0jWjQ?si=PLKnwVCLIItqcvPe",
      thumbnail: "https://img.youtube.com/vi/IIr22p0jWjQ/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/dh0pJdgY6Lc?si=N39wAySX_z9546bL",
      thumbnail: "https://img.youtube.com/vi/dh0pJdgY6Lc/hqdefault.jpg",
    },
  ];

  const sponsors = [
    {
      name: "Therap",
      logo: "/images/sponsors/therap.webp",
      status: "Bronze-sponsor",
    },
    {
      name: "Intelligent Machines",
      logo: "/images/sponsors/iml.png",
      status: "Co-sponsor",
    },
    {
      name: "Computer Society",
      logo: "/images/sponsors/ieee-buet.jpeg",
      status: "Co-host",
    },
  ];

  return (
    <>
      <div className="relative">
        <EventHero
          title="Poster Presentation"
          description={event.description}
          ctaPrimary={{
            label: "Register",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSeZab2Azj7Y9G67rjORZ7FJDLXiRbWgkRkqMQ7sHosqFxdQzQ/viewform",
          }}
          ctaSecondary={{
            label: "Rules",
            href: "https://drive.google.com/file/d/1emZQpiB_g1i-ueEHp3uqxPnxrWgr6bNp/view",
          }}
          event={event}
        />

        <EventBanner
          child1={<h3 className="font-semibold">{event.date}</h3>}
          child2={<h3 className="font-semibold">2 phases</h3>}
          child3={<h3 className="font-semibold">28K Prize Money</h3>}
        />

        <Sponsors sponsors={sponsors} />

        <EventDescription
          description={
            "Step into the world of academia and innovation at BUET CSE Fest 2024 - Poster Presentation, presented by United Group! This event offers undergraduate students the perfect platform to showcase their research ideas, whether they're just beginning or refining a well-crafted project. Participants will have the opportunity to submit posters online, with finalists presenting on-site at BUET. Gain feedback from veteran academicians, exchange ideas, and compete for exciting prize money!"
          }
        />

        <EventTimeLine timeLineData={timeLineData} />

        <EventPrize prizeData={prizeMoney} />

        <EventFaq faqData={faqData} />

        <EventResources resources={resourcesData} />

        <EventCTA href="https://docs.google.com/forms/d/e/1FAIpQLSeZab2Azj7Y9G67rjORZ7FJDLXiRbWgkRkqMQ7sHosqFxdQzQ/viewform" />
      </div>
    </>
  );
}
