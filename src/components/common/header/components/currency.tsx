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
        <Button variant="ghost" className="text-white hover:text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
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
