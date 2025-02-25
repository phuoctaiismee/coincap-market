import React from "react";
import { CommentItem } from "./comment-item";

export const ListComment = () => {
  return (
    <div className="grid gap-4">
      {Array(3)
        .fill(1)
        .map((_, index) => (
          <React.Fragment key={index}>
            <CommentItem />
            <div className="w-full border-b border-neutral-300 my-3" />
          </React.Fragment>
        ))}
    </div>
  );
};
