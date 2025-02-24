import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
type Props = {
  defaultValue: string;
  label: string;
};
const LocalesSwitcher = ({ defaultValue, label }: Props) => {
  const t = useTranslations("global");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-white hover:text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <div className="aspect-[0.25] relative w-[24px] h-[16px]">
            <Image
              src={`https://flagsapi.com/${
                defaultValue === "en" ? "US" : "VN"
              }/flat/64.png`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          {label}
          <ChevronDown className="w-4 h-4 fill-current" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/en">
            <div className="aspect-[0.25] relative w-[24px] h-[16px]">
              <Image
                src="https://flagsapi.com/US/flat/64.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            {t("english")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/vi">
            <div className="aspect-[0.25] relative w-[24px] h-[16px]">
              <Image
                src="https://flagsapi.com/VN/flat/64.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            {t("vietnamese")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocalesSwitcher;
