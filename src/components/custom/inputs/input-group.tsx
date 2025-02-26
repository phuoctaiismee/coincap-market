import VisionAppleBorder from "@/components/common/containers/vision-apple-border";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

interface InputGroupProps {
  className?: string;
  type?: "number" | "text" | "date";
  placeholderFrom?: string;
  placeholderTo?: string;
  subFixFrom?: string | React.ReactNode;
  subFixTo?: string | React.ReactNode;
}

const InputGroup = ({
  type = "number",
  placeholderFrom = "From",
  placeholderTo = "To",
  subFixFrom,
  subFixTo,
  className,
}: InputGroupProps) => {
  return (
    <VisionAppleBorder className="w-full">
      <div className={cn("flex w-full", className)}>
        <div className="relative flex-1">
          <Input
            className="flex-1 border-none rounded-s-full rounded-e-none focus-visible:ring-0 focus-visible:ring-offset-0 [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder={placeholderFrom}
            type={type}
            aria-label="Min Value"
          />
          {subFixFrom && (
            <div className="absolute right-4 top-0 bottom-0 flex items-center justify-center">
              {subFixFrom}
            </div>
          )}
        </div>
        <div className="relative flex-1">
          <Input
            className="-ms-px flex-1 border-t-0 border-b-0 border-r-0 border-neutral-300 rounded-s-none rounded-e-full focus-visible:ring-0 focus-visible:ring-offset-0 [-moz-appearance:_textfield] focus:z-10 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            placeholder={placeholderTo}
            type={type}
            aria-label="Max Value"
          />
          {subFixTo && (
            <div className="absolute right-4 top-0 bottom-0 flex items-center justify-center">
              {subFixTo}
            </div>
          )}
        </div>
      </div>
    </VisionAppleBorder>
  );
};

export default InputGroup;
