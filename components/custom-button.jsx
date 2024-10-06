"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const CustomButton = ({
  children,
  className,
  variant = "primary",
  link,
  blank = false,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (!link) return;
    if (blank) window.open(link, "_blank");
    else router.push(link);
  };

  if (variant === "primary") {
    return (
      <>
        <div
          className={cn(
            "cursor-pointer rounded-[8px] px-6 py-3 bg-gradient-to-br from-primary to-accent font-semibold z-10",
            className
          )}
          onClick={handleClick}
        >
          {children}
        </div>
      </>
    );
  } else if (variant === "secondary") {
    return (
      <>
        <div
          className="cursor-pointer rounded-[8px] px-6 py-3 border font-semibold hover:bg-highlight/30 bg-transparent duration-300 transition z-50"
          onClick={handleClick}
        >
          {children}
        </div>
      </>
    );
  }
};
