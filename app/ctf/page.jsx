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
  const event = events[4];

  const timeLineData = [
    {
      event: "Registration Deadline",
      location: "Online",
      date: "Oct 11 (11:59 PM)",
    },
    {
      event: "Preliminary Round",
      location: "Online",
      date: "Oct 18 (09:00 AM - 09:00 PM)",
    },
    {
      event: "Final Round",
      location: "ECE Building, BUET",
      date: "Oct 31 (09:00 AM - 03:00 PM)",
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
      ques: "What is BUET CSE Fest 2024 CTF Competition?",
      ans: "A cybersecurity competition for university students to showcase their ethical hacking skills.",
    },
    {
      ques: "Who can participate?",
      ans: "Undergraduate students from any university in the region (teams of 2-4 members)",
    },
    {
      ques: "Can teams have members from different universities?",
      ans: "No, teams must be from the same university.",
    },
    {
      ques: "What are the competition phases?",
      ans: "There are two phases: an online Preliminary Round and an onsite Final Round.",
    },
    {
      ques: "When is the Preliminary Round?",
      ans: "October 18, 2024, 9:00 AM - 9:00 PM BST",
    },
    {
      ques: "When is the Final Round?",
      ans: "October 31, 2024, 9:00 AM - 3:00 PM BST",
    },
    {
      ques: "Where will the competition be held?",
      ans: "Preliminary Round: Online, Final Round: Onsite at Department of CSE, ECE Building, BUET",
    },
    {
      ques: "How do I register for the Preliminary Round?",
      ans: "Register by October 11, 2024, 11:59 PM BST at https://forms.gle/2JTC98k6mTMfYakB6 (Free)",
    },
    {
      ques: "Is there a registration fee for the Final Round?",
      ans: "Yes, 1000 BDT (except for BUET teams)",
    },
    {
      ques: "What kind of challenges will be included?",
      ans: "Challenges may include Cryptography, Web Exploitation, Reverse Engineering, Pwning, OSINT, Forensics, Hardware, Android, and Miscellaneous. Hardware and Android challenges will only be in the Final Round.",
    },
    {
      ques: "What are the prizes?",
      ans: `
      * First Place: BDT 30,000
      * Second Place: BDT 20,000
      * Third Place: BDT 12,000
      * BUET Rising Team (Best performing junior team from BUET): BDT 8,000
    `,
    },
    {
      ques: "Where can I find the competition rules?",
      ans: "Please refer to the rulebook at https://drive.google.com/.../1kcNdakxX4yAp28sM0Px.../view...",
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
      name: "BUET Cyber Security Club",
      logo: "/images/sponsors/buet-cyber-security.jpeg",
      status: "Co-host",
    },
    {
      name: "Computer Society",
      logo: "/images/sponsors/ieee-buet.png",
      status: "Co-host",
    },
  ];

  const resourcesData = [
    {
      videoSrc: "https://www.youtube.com/embed/5C-OtW7C5oU?si=0tyNXjqFevJkmIba",
      thumbnail: "https://img.youtube.com/vi/5C-OtW7C5oU/hqdefault.jpg",
    },
    {
      videoSrc: "https://www.youtube.com/embed/9ReSHQihuZw?si=wnq9cE6AwVREUyCW",
      thumbnail: "https://img.youtube.com/vi/9ReSHQihuZw/hqdefault.jpg",
    },
  ];

  return (
    <>
      <div className="relative w-full">
        <EventHero
          title="Inter University Capture The Flag"
          description={event.description}
          ctaPrimary={{
            label: "Register",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSeud1y2d_iSfpvQjhzMsTW4FT_zWaODYt7e9ZnFVh55djgzWg/viewform",
          }}
          ctaSecondary={{
            label: "Rules",
            href: "https://drive.google.com/file/d/1kcNdakxX4yAp28sM0PxWH0OmcVPS8N0k/view",
          }}
          event={event}
        />

        <EventBanner
          child1={<h3 className="font-semibold">{event.date}</h3>}
          child2={<h3 className="font-semibold">2 Rounds</h3>}
          child3={<h3 className="font-semibold">70K Prize Money</h3>}
        />

        <Sponsors sponsors={sponsors} />

        <EventDescription
          description={
            "BUET CSE Fest 2024 CTF Competition is a cybersecurity challenge designed to test the skills of university students. Participants will face a series of technical puzzles and challenges related to ethical hacking and cybersecurity. Teams will compete to solve these challenges and emerge as the champions. The competition offers a platform for students to showcase their expertise and learn from experienced professionals."
          }
        />

        <EventTimeLine timeLineData={timeLineData} />

        <EventPrize prizeData={prizeMoney} />

        <EventFaq faqData={faqData} />

        <EventResources resources={resourcesData} />

        <EventCTA href="https://docs.google.com/forms/d/e/1FAIpQLSeud1y2d_iSfpvQjhzMsTW4FT_zWaODYt7e9ZnFVh55djgzWg/viewform" />
      </div>
    </>
  );
}
