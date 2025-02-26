import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { ChevronDown } from "lucide-react";

const Currency = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="lg:text-white lg:hover:text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0  text-xs p-0 lg:px-2 lg:py-1 font-normal">
          USD
          <ChevronDown className="w-4 h-4 fill-current" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>USD</DropdownMenuItem>
        <DropdownMenuItem>VND</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Currency;
