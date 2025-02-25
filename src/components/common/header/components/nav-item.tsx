import { LinkItem } from "@/types/navigations";
import React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const NavItem = ({ href, label, children }: LinkItem) => {
  const hasChildren = children && children.length > 0;

  if (hasChildren) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 hover:bg-transparent text-[#6D6D6D]"
          >
            {label}
            <ChevronDown className="w-4 h-4 fill-current" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {children?.map((child) => (
            <Link href={child.href} key={child.label}  className="hover:cursor cursor-pointer hover:bg-gray-100">
              <DropdownMenuItem>{child.label}</DropdownMenuItem>
            </Link>
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
