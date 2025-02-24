"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

type SearchInputType = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: () => void | any;
  wrapperClassName?: string;
  inputClassName?: string;
  icon?: React.ReactNode;
};

const SearchInput = ({
  onChange,
  onClick,
  value,
  wrapperClassName,
  inputClassName,
  icon,
  ...rest
}: SearchInputType) => {
  return (
    <div
      className={cn(
        "rounded-full w-[18.75rem] px-3 py-1 border border-neutral-400",
        wrapperClassName
      )}
    >
      <div className="flex items-center justify-start gap-0">
        <div className="aspect-square size-6">
          {icon ? (
            icon
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_369_29947"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_369_29947)">
                <path
                  d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                  fill="black"
                />
              </g>
            </svg>
          )}
        </div>
        <Input
          className={cn(
            "border-none text-sm shadow-none outline-none placeholder:text-sm placeholder:text-neutral-400 focus:ring-0 focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 md:text-base",
            inputClassName
          )}
          placeholder="Search posts or users..."
          value={value}
          onChange={onChange}
          onClick={onClick}
          {...rest}
        />
      </div>
    </div>
  );
};

export default SearchInput;
