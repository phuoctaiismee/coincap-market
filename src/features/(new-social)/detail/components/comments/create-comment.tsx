import { Input } from "@/components/ui/input";
import { PrimaryButton } from "@/features/(new-social)/shared-components";
import { cn } from "@/lib/utils";
import React from "react";

export const CreateComment = () => {
  return (
    <div className="w-full flex items-center justify-between gap-3">
      <div className="w-full flex-1">
        <Input
          className={cn(
            "rounded-2xl w-full border-neutral-300 h-11 focus-visible:ring-0 focus-visible:border-neutral-300"
          )}
          placeholder="Leave your comment here..."
        />
      </div>
      <PrimaryButton className="font-medium px-6 shadow-lg">Reply</PrimaryButton>
    </div>
  );
};
