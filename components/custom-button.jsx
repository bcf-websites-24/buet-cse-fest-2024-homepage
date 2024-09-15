"use client";

import { cn } from "@/lib/utils";

export const CustomButton = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("cursor-pointer rounded px-6 py-3", className)}
      style={{
        border: "2px solid transparent",
        borderImage: `linear-gradient(to bottom right, #8e44ec 0%, #59b5f8 50%, #3bbb96 100%);`,
        borderImageSlice: 10,
        borderRadius: "9999px",
      }}
      {...props}
    >
      {children}
    </div>
  );
};
