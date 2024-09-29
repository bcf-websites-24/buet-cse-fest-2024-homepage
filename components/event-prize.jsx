import { cn } from "@/lib/utils";
import { AwardIcon } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";

const color = {
  "1st Place": "#fbbf24",
  "2nd Place": "#94a3b8",
  "3rd Place": "#fb923c",
};

// border-[#fbbf24] border-[#94a3b8] border-[#fb923c]
// text-[#fbbf24] text-[#94a3b8] text-[#fb923c] text-border

export const EventPrize = ({ prizeData }) => {
  return (
    <div className="container">
      <div className="mt-24 mb-12">
        <h3 className="header mb-12">Prize Money</h3>

        {prizeData.length === 0 && <div className="center">TBD</div>}

        <div className="w-full center flex-col">
          <div className="">
            {prizeData.map((prize, index) => (
              <div key={index}>
                <div className="flex gap-6 items-center mb-6 relative group">
                  <div className="absolute -inset-6 hidden group-hover:block">
                    <SparklesCore
                      id=""
                      background="transparent"
                      minSize={0.6}
                      maxSize={1.4}
                      particleDensity={160}
                      className="w-full h-full"
                      particleColor={color[prize.label] || "#fff"}
                    />
                  </div>
                  <div
                    className={cn(
                      "border-2 rounded-full p-4 text-border",
                      `border-[${color[prize.label]}]`,
                      color[prize.label] && ` text-[${color[prize.label]}]`
                    )}
                  >
                    <AwardIcon size={36} />
                  </div>

                  <div className="">
                    <p className="text-sm text-slate-400 mb-1.5">
                      {prize.label}
                    </p>
                    <p className="text-xl font-semibold">{prize.prize}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
