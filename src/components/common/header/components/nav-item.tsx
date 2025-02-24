import { LinkItem } from "@/types/navigations";
import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const NavItem = ({ href, label, children }: LinkItem) => {
  const hasChildren = children && children.length > 0;

  if (hasChildren) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-0 hover:bg-transparent text-[#6D6D6D]">
            {label}
            <ChevronDown className="w-4 h-4 fill-current" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {children?.map((child) => (
            <DropdownMenuItem key={child.label}>
              <Link href={child.href}>{child.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link href={href} className="text-base text-neutral-500">
      {label}
    </Link>
  );
};

export default NavItem;
