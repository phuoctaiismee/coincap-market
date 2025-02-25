import { Button } from "@/components/ui/button";
import { LucideColumns3, SlidersVertical } from "lucide-react";

const FilterActions = () => {
  return (
    <div className="flex gap-[8px]">
      <Button variant={"border"}>
        <SlidersVertical />
        Filters
      </Button>
      <Button variant={"border"}>
        <LucideColumns3 />
        Columns
      </Button>
    </div>
  );
};

export default FilterActions;
