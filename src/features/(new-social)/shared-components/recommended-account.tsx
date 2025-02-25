import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ACCOUNTS = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    image: "/assets/images/avatar.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    image: "/assets/images/avatar.png",
  },
  {
    id: 3,
    name: "Mike Johnson",
    username: "@mikej",
    image: "/assets/images/avatar.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    username: "@emilyd",
    image: "/assets/images/avatar.png",
  },
  {
    id: 5,
    name: "Chris Lee",
    username: "@chrislee",
    image: "/assets/images/avatar.png",
  },
];
export const RecommendAccount = ({
  title,
  titleClassName,
}: {
  title?: string;
  titleClassName?: string;
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#E5EFF8] to-[#D4EBFF] rounded-xl p-3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <span
            className={cn(
              "font-semibold text-[#141416] text-lg",
              titleClassName
            )}
          >
            {title ? title : `Recommended Accounts`}
          </span>
        </div>

        <div className="w-full border-b border-neutral-200" />

        <div className="grid gap-3">
          {ACCOUNTS?.map((trending) => (
            <div
              key={trending.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Link href="#">
                  <Image
                    src={trending.image}
                    alt={trending?.name}
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className="text-sm text-[#141416] font-medium"
                    >
                      {trending.name}
                    </Link>
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_369_29013"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="17"
                      >
                        <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_369_29013)">
                        <path
                          d="M5.92437 14.8768L4.7513 12.9384L2.54233 12.4435L2.74618 10.1845L1.24875 8.49995L2.74618 6.81535L2.54233 4.55638L4.7513 4.06151L5.92437 2.12305L8 3.00895L10.0756 2.12305L11.2487 4.06151L13.4577 4.55638L13.2538 6.81535L14.7512 8.49995L13.2538 10.1845L13.4577 12.4435L11.2487 12.9384L10.0756 14.8768L8 13.9909L5.92437 14.8768ZM7.15 10.6691L10.8859 6.94995L10.2667 6.34355L7.15 9.44355L5.73333 8.03073L5.11411 8.64995L7.15 10.6691Z"
                          fill="#00359E"
                        />
                      </g>
                    </svg>
                  </div>
                  <span className="text-[#848484] text-xs">
                    {trending.username}
                  </span>
                </div>
              </div>
              <span className="cursor-pointer text-blueDarkPrimary text-sm font-semibold">
                Follow
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
