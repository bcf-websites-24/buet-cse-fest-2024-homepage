import { allEvents } from "@/lib/data";
import Image from "next/image";

export const EventList = () => {
  return (
    <div className="bg-highlight py-24 my-16">
      <div className="container">
        <h3 className="header">Exciting Events</h3>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {allEvents.map((event) => (
            <div className="flex items-center justify-start gap-x-4">
              <Image
                src={event.image}
                width={400}
                height={400}
                className="rounded-xl w-20"
              />
              <h3 className="text-xl text-slate-200 text-light flex-1 mt-6">
                {event.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
