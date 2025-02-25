import { Link } from "@/i18n/routing";
import React from "react";

const TRENDING = [
  {
    id: 1,
    name: "BlackRock",
  },
  {
    id: 2,
    name: "Etherium",
  },
  {
    id: 3,
    name: "Marco Insights",
  },
  {
    id: 4,
    name: "BTC",
  },
  {
    id: 5,
    name: "CMC Smart Quests",
  },
];

export const TrendingTopic = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#E5EFF8] to-[#D4EBFF] rounded-xl p-3">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7921 19.7656C12.7866 18.2949 12.8782 16.7065 12.067 15.0002C11.8414 15.9156 11.4288 16.4712 10.829 16.667C11.386 15.0764 10.9206 13.358 9.43281 11.5117C9.4007 13.4186 8.94246 14.8076 8.05805 15.6789C6.83969 16.878 6.85402 18.2313 8.10101 19.7387C2.92453 16.9839 2.19422 13.2893 5.91 8.65477C6.14047 9.77437 6.69894 10.4618 7.58551 10.7169C6.61914 6.61609 7.6359 3.12191 10.6357 0.234375C10.6542 6.64246 12.6192 7.21203 15.1037 10.0725C17.7862 13.5051 16.2098 17.4665 11.7921 19.7656Z"
              fill="url(#paint0_linear_369_28922)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_369_28922"
                x1="15.9962"
                y1="5.59484"
                x2="4.56836"
                y2="17.0227"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EF3E3D" />
                <stop offset="1" stopColor="#FFC828" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-semibold text-[#141416] text-lg">
            Trending Topics
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_369_28925"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_369_28925)">
              <path
                d="M9.45834 13.792H10.5417V9.00033H9.45834V13.792ZM9.99563 7.74074C10.1615 7.74074 10.3019 7.68463 10.4171 7.57241C10.5322 7.46019 10.5898 7.32116 10.5898 7.15533C10.5898 6.98949 10.5337 6.84901 10.4215 6.73387C10.3092 6.61887 10.1702 6.56137 10.0044 6.56137C9.83855 6.56137 9.69806 6.61741 9.58292 6.72949C9.46778 6.84171 9.41021 6.98074 9.41021 7.14658C9.41021 7.31241 9.46632 7.4529 9.57855 7.56803C9.69077 7.68317 9.8298 7.74074 9.99563 7.74074ZM10.0071 17.5837C8.96389 17.5837 7.98139 17.3863 7.05959 16.9916C6.13778 16.5969 5.33098 16.0537 4.63917 15.3622C3.94737 14.6707 3.40396 13.8645 3.00896 12.9437C2.6141 12.023 2.41667 11.0391 2.41667 9.9922C2.41667 8.94526 2.61403 7.96435 3.00876 7.04949C3.40348 6.13463 3.9466 5.3313 4.63813 4.63949C5.32966 3.94769 6.13584 3.40428 7.05667 3.00928C7.97737 2.61442 8.96119 2.41699 10.0081 2.41699C11.0551 2.41699 12.036 2.61435 12.9508 3.00908C13.8657 3.4038 14.669 3.94692 15.3608 4.63845C16.0526 5.32998 16.596 6.13449 16.991 7.05199C17.3859 7.96963 17.5833 8.95005 17.5833 9.99324C17.5833 11.0364 17.386 12.0189 16.9913 12.9407C16.5965 13.8625 16.0534 14.6694 15.3619 15.3612C14.6704 16.053 13.8658 16.5964 12.9483 16.9914C12.0307 17.3862 11.0503 17.5837 10.0071 17.5837Z"
                fill="#00359E"
              />
            </g>
          </svg>
        </div>
        <div className="w-full border-b border-neutral-200" />

        <div className="grid gap-3">
          {TRENDING?.map((trending, index) => (
            <Link href="#" key={trending.id} className="flex items-center gap-6">
              <span className="text-sm text-[#141416">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-[#141416]">{`#${trending.name}`}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
