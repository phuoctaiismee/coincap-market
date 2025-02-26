import { cn } from "@/lib/utils";
import React from "react";
interface VisionAppleBorderProps {
  children: React.ReactNode;
  className?: string;
}
const VisionAppleBorder = ({ children, className }: VisionAppleBorderProps) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 6px -2px #10182808",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(156.52deg, rgba(0, 0, 0, 0.4) 2.12%, rgba(0, 0, 0, 0.0001) 39%, rgba(0, 0, 0, 0.0001) 54.33%, rgba(0, 0, 0, 0.1) 93.02%)",
      }}
      className={cn("!p-[1px] relative rounded-full w-fit", className)}
    >
      <div className={cn("rounded-full bg-white", className)}>{children}</div>
    </div>
  );
};

export default VisionAppleBorder;
