import { FacebookIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="border-t mt-16 w-full">
      <div className="container flex justify-between items-center py-8 text-slate-400 w-full">
        <p className="">© 2024</p>

        <div className="flex gap-4 items-center">
          <Button size="icon" variant="outline">
            <FacebookIcon size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};
