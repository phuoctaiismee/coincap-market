import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowLeftRight, Ellipsis, Info, Star } from "lucide-react";

const PopupActions = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
          size="icon"
          variant={"ghost"}
        >
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{
          boxShadow: "0px 12px 24px 0px #0000001F",
          backdropFilter: "blur(48px)",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(156.52deg, rgba(0, 0, 0, 0.4) 2.12%, rgba(0, 0, 0, 0.0001) 39%, rgba(0, 0, 0, 0.0001) 54.33%, rgba(0, 0, 0, 0.1) 93.02%)",
        }}
        align="end"
        className="p-[1px] rounded-[16px]"
      >
        <div className="w-full h-full bg-white rounded-[16px]">
          <div className="px-[24px] py-[16px] rounded-[16px] bg-gray-02/30">
            <div className="divide-y">
              <div className="flex items-center cursor-pointer gap-[8px] py-3">
                <Star size={16} fill="#00359E" stroke="none" />
                <span className="text-14-21-600">Add to watchlist</span>
              </div>
              <div className="flex items-center cursor-pointer gap-[8px] py-3">
                <ArrowLeftRight className="text-gray-03" size={16} />
                <span className="text-14-21-600">Swap token</span>
              </div>
              <div className="flex items-center cursor-pointer gap-[8px] py-3">
                <Info className="text-gray-03" size={16} />
                <span className="text-14-21-600">Details token</span>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopupActions;
