import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type OutlineButtonType = {
  children: React.ReactNode;
  className?: string;
};

const OutlineButton = ({ children, className }: OutlineButtonType) => {
  return (
    <Button
      className={cn(
        "border border-blueDarkPrimary rounded-full font-semibold text-blueDarkPrimary bg-white py-3 px-4 hover:bg-blueDarkPrimary hover:text-white",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
