import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { ShineBorder } from "@/components/common/containers/shine-border";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
interface FillterDropdownProps {
  networks: {
    image: string;
    name: string;
    value: string;
  }[];
}
const FillterDropdown = ({ networks }: FillterDropdownProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <ShineBorder className="p-0 min-w-0" borderRadius={100}> */}
        <Button variant="ghost" className="rounded-full">
          All Networks
          <IoMdArrowDropdown />
        </Button>
        {/* </ShineBorder> */}
      </PopoverTrigger>
      <PopoverContent align="start" side="bottom" className="rounded-lg max-w-[200px]">
        <div className="flex flex-col gap-2">
          {networks.map((network) => (
            <div className="flex items-center gap-2 py-1" key={network.value}>
              <Checkbox id={network.value} />
              <Label
                htmlFor={network.value}
                className="text-sm flex items-center gap-2"
              >
                <div className="relative size-6 aspect-square flex items-center justify-center rounded-full overflow-hidden">
                  <Image
                    src={network.image}
                    alt={network.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {network.name}
              </Label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FillterDropdown;
