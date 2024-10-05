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
  const event = events[5];
  const timeLineData = [
    {
      event: "Pre-registration",
      location: "Online",
      date: "Sep 29 - Oct 06 (11:55 PM)",
    },
    {
      event: "Mock Contest",
      location: "ECE Building, BUET",
      date: "Oct 31 (03:00 PM - 05:00PM)",
    },
    {
      event: "Main Contest",
      location: "ECE Building, BUET",
      date: "Nov 01 (08:00 AM - 01:00PM)",
    },
  ];

  const prizeMoney = [
    {
      label: "1st Place",
      prize: "50,000",
    },
    {
      label: "2nd Place",
      prize: "30,000",
    },
    {
      label: "3rd Place",
      prize: "20,000",
    },
    {
      label: "4th Place",
      prize: "15,000",
    },
    {
      label: "5th Place",
      prize: "10,000",
    },
    {
      label: "6-8th Place",
      prize: "8,000",
    },
    {
      label: "9-10th Place",
      prize: "6,000",
    },
  ];

  const faqData = [
    {
      ques: "Will there be a preliminary contest for team selection?",
      ans: "No, there will be no preliminary contest.",
    },
    {
      ques: "What happens after I pre-register?",
      ans: "After pre-registration, the number of team slots available for each university will be announced. If your team is selected, you can proceed with final registration.",
    },
    {
      ques: "How will slots be assigned to each university?",
      ans: "Slots will be assigned based on each university’s performance in recent ICPC and IUPCs.",
    },
    {
      ques: "Are there any rules for how universities should fill their slots?",
      ans: "No, universities can choose their teams from their current students however they prefer.",
    },
    {
      ques: "When will final registration start?",
      ans: "Final registration will begin once the team list is published. Updates will be provided on the event page or website.",
    },
    {
      ques: "Is a registration fee required?",
      ans: "Yes, if your team is selected, you will need to pay a fee of BDT 5,000.",
    },
    {
      ques: "What should I bring on the contest day?",
      ans: "You may bring a printed template of up to 25 pages. More details about the template guidelines will be provided closer to the event.",
    },
    {
      ques: "Who should I contact for further queries?",
      ans: "For any queries, email iupc@buetcsefest2024.com.",
    },
  ];

  const resourcesData = [
    {
      videoSrc: "https://www.youtube.com/embed/xAeiXy8-9Y8?si=lTf6673h58qv0Peg",
      thumbnail: "https://img.youtube.com/vi/xAeiXy8-9Y8/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/5yFkAG6lOSg?si=-Y74Dm20iP4b3SfP",
      thumbnail: "https://img.youtube.com/vi/5yFkAG6lOSg/hqdefault.jpg",
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
      <div className="relative w-full">
        <EventHero
          title="Inter University Programming Contest"
          description={event.description}
          ctaPrimary={{
            label: "Register",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSfNequzljmicXGDd-YWuUTgRdAE0Qi1UAruGJ2CVMUNF6TB3Q/viewform",
          }}
          ctaSecondary={{
            label: "Event",
            href: "https://www.facebook.com/events/847729750896634/",
          }}
          event={event}
        />

        <EventBanner
          child1={<h3 className="font-semibold">{event.date}</h3>}
          child2={<h3 className="font-semibold">Mock Contest Available</h3>}
          child3={<h3 className="font-semibold">160K+ Prize Money</h3>}
        />

        <Sponsors sponsors={sponsors} />

        <EventDescription
          description={
            "The BUET CSE Fest 2024 proudly brings back the Inter University Programming Contest (IUPC) after a year-long break! This exciting competition will bring together universities from across the country, providing an opportunity for teams to showcase their problem-solving skills. With pre-registration starting on 29th September and the main contest taking place on 1st November 2024, participants will engage in a test of knowledge, collaboration, and coding expertise. Prepare to shine and compete for glory in this prestigious event!"
          }
        />

        <EventTimeLine timeLineData={timeLineData} />

        <EventPrize prizeData={prizeMoney} />

        <EventFaq faqData={faqData} />

        <EventResources resources={resourcesData} />

        <EventCTA href="https://docs.google.com/forms/d/e/1FAIpQLSfNequzljmicXGDd-YWuUTgRdAE0Qi1UAruGJ2CVMUNF6TB3Q/viewform" />
      </div>
    </>
  );
}
