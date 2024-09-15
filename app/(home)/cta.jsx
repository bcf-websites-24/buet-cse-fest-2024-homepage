import { CustomButton } from "@/components/custom-button";

export const CallToAction = () => {
  return (
    <div className="container bg-highlight rounded-xl w-full min-h-64 my-32 center flex-col">
      <p className="text-x2xl md:text-4xl mb-6 text-cetner">
        Be a part of this amazing event
      </p>

      <CustomButton>Visit Facebook Event</CustomButton>
    </div>
  );
};
