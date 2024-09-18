"use client";

import { CalendarIcon, Layers2Icon, TrophyIcon } from "lucide-react";

export const EventBanner = ({ child1, child2, child3 }) => {
  return (
    <div className="bg-highlight py-24 mb-16">
      <div className="container text-slate-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex-col center text-center">
            <CalendarIcon size={24} className="mb-6 text-primary" />
            {child1}
          </div>

          <div className="flex-col center">
            <Layers2Icon size={24} className="mb-6 text-secondary" />
            {child2}
          </div>

          <div className="flex-col center">
            <TrophyIcon size={24} className="mb-6 text-accent" />
            {child3}
          </div>
        </div>
      </div>
    </div>
  );
};
