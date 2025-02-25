import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmilePlus } from "lucide-react";

export const CreateComment = () => {
  return (
    <div className="bg-white py-2 px-0">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 w-full relative flex items-center border border-neutral-300 rounded-xl focus-within:ring-0 px-2">
          <Input
            type={"text"}
            placeholder="Leave your comment here..."
            className="border-0 focus-visible:ring-0 focus-within:border-none focus-within:outline-none focus-within:bg-transparent shadow-none"
          />
          <button>
            <SmilePlus className="size-5 text-muted-foreground" />
          </button>
        </div>
        <Button size={"icon"} className="rounded-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_372_35870"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_372_35870)">
              <path
                d="M3.5 19.25V13.673L10.423 12L3.5 10.327V4.75L20.7115 12L3.5 19.25Z"
                fill="white"
              />
            </g>
          </svg>
        </Button>
      </div>
    </div>
  );
};
