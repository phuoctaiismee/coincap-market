import React from "react";
import { CreateComment } from "./create-comment";
import { ListComment } from "./list-comment";

export const CommentSection = () => {
  return (
    <div className="w-full flex flex-col gap-8 mt-16">
      <h2 className="font-bold text-3xl">Comments (24)</h2>
      <CreateComment />
      <ListComment />
    </div>
  );
};
