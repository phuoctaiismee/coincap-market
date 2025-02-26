import VisionAppleBorder from "@/components/common/containers/vision-apple-border";
import BaseModal from "@/components/common/modal/base-modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  RefreshCcw,
  SlidersVertical,
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

const FilterCatefory = () => {
  return <BaseModal
  title="Filters"
  trigger={
    <Button variant={"border"}>
      <SlidersVertical />
      Filters
    </Button>
  }
>
  <div className="flex flex-col gap-6">
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">Chain</Label>
      <div className="col-span-2">
        <VisionAppleBorder className="w-full">
          <Select>
            <SelectTrigger className="w-full rounded-full border-none bg-[#B4B4B44D]">
              <SelectValue placeholder="All chains" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">All chains</SelectItem>
                <SelectItem value="banana">Binance</SelectItem>
                <SelectItem value="blueberry">BSC</SelectItem>
                <SelectItem value="grapes">Ethereum</SelectItem>
                <SelectItem value="pineapple">Solana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </VisionAppleBorder>
      </div>
    </div>
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">Category</Label>
      <div className="col-span-2">
        <VisionAppleBorder className="w-full">
          <Select>
            <SelectTrigger className="w-full rounded-full border-none bg-[#B4B4B44D]">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">All categories</SelectItem>
                <SelectItem value="banana">Binance</SelectItem>
                <SelectItem value="blueberry">BSC</SelectItem>
                <SelectItem value="grapes">Ethereum</SelectItem>
                <SelectItem value="pineapple">Solana</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </VisionAppleBorder>
      </div>
    </div>
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">Market cap</Label>
      <div className="col-span-2">
        <InputGroup
          placeholderFrom="Min"
          placeholderTo="Max"
          subFixFrom="$"
          subFixTo="$"
          type="number"
        />
      </div>
    </div>
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">FDV</Label>
      <div className="col-span-2">
        <InputGroup
          placeholderFrom="Min"
          placeholderTo="Max"
          subFixFrom="$"
          subFixTo="$"
          type="number"
        />
      </div>
    </div>
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">
        Price change 24h
      </Label>
      <div className="col-span-2">
        <InputGroup
          placeholderFrom="Min"
          placeholderTo="Max"
          subFixFrom="%"
          subFixTo="%"
          type="number"
        />
      </div>
    </div>
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">Volume 24h</Label>
      <div className="col-span-2">
        <InputGroup
          placeholderFrom="Min"
          placeholderTo="Max"
          subFixFrom="$"
          subFixTo="$"
          type="number"
        />
      </div>
    </div>
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">
        Volume change 24h
      </Label>
      <div className="col-span-2">
        <InputGroup
          placeholderFrom="Min"
          placeholderTo="Max"
          subFixFrom="%"
          subFixTo="%"
          type="number"
        />
      </div>
    </div>
    <div className="grid grid-cols-3 items-center">
      <Label className="text-neutral-04 text-base">Age</Label>
      <div className="col-span-2">
        <InputGroup
          placeholderFrom="Min"
          placeholderTo="Max"
          subFixFrom={
            <div className="flex items-center gap-0.5">
              <span className="text-xs">hours</span>
              <ChevronDown className="size-4 text-neutral-04" />
            </div>
          }
          subFixTo={
            <div className="flex items-center gap-0.5">
              <span className="text-xs">hours</span>
              <ChevronDown className="size-4 text-neutral-04" />
            </div>
          }
          type="number"
        />
      </div>
    </div>
    <div className="h-[1px] bg-[#0000001F] w-full" />
    <div className=" flex items-center justify-between">
      <Button variant="link">
        <RefreshCcw className="size-4" /> Reset
      </Button>
      <Button className="rounded-full px-6">Apply</Button>
    </div>
  </div>
</BaseModal>;
};

export default FilterCatefory;
