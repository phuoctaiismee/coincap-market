import VisionAppleBorder from "@/components/common/containers/vision-apple-border";
import BaseModal from "@/components/common/modal/base-modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  LucideColumns3,
  RefreshCcw,
  SlidersVertical,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputGroup from "@/components/custom/inputs/input-group";

const FilterColumn = () => {
  return (
    <BaseModal
      title="Filters"
      trigger={
        <Button variant={"border"}>
          <LucideColumns3 />
          Columns
        </Button>
      }
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Label className="text-base text-neutral-04 font-normal">
            Add, delete and sort metrics just how you need it
          </Label>
          <VisionAppleBorder>
            <Button variant={"ghost"} className="bg-vision-pro-bg rounded-full">
              Classic
              <ChevronDown className="size-4" />
            </Button>
          </VisionAppleBorder>
        </div>
        <div className="flex items-center justify-end text-neutral-04">
          <span className="text-primary">6</span>/12 selected
        </div>
        <VisionAppleBorder className="rounded-3xl">
          <div className="flex items-center flex-wrap gap-2 p-4 bg-[#0077ED1F] rounded-3xl">
            <div className="bg-neutral-09 rounded-full px-3 py-1.5 flex items-center gap-2">
              Market cap
              <Button size="icon" className="!size-5 rounded-full">
                <X className="size-4" />
              </Button>
            </div>
          </div>
        </VisionAppleBorder>
      </div>
    </BaseModal>
  );
};

export default FilterColumn;
