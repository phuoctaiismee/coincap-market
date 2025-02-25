import React from "react";
import { OwnerPost } from "./owner-post";
import { CommentItem } from "@/features/(new-social)/detail/components/comments/comment-item";

export const StoryDetailComment = () => {
  return (
    <div className="flex flex-col h-screen gap-3">
      <OwnerPost />

      <div className="w-full border-b border-neutral-400 my-4" />

      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">Comments (24)</div>
        <div className="grid gap-5">
          {Array(2)
            .fill(1)
            .map((_, index) => (
              <CommentItem key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
