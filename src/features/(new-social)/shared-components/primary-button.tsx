import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type PrimaryButtonType = {
  children: React.ReactNode;
  className?: string;
};

const PrimaryButton = ({ children, className }: PrimaryButtonType) => {
  return (
    <Button
      className={cn(
        "border border-blueDarkPrimary rounded-full font-semibold text-white bg-blueDarkPrimary py-3 px-4 hover:bg-blueDarkPrimary/80 hover:text-white",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
