import { Image } from "@/components/common/images";
import {
  Ellipsis,
  MessageSquareMore,
  RefreshCcw,
  SmilePlus,
} from "lucide-react";
import React from "react";

export const CommentItem = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/avatar.png"
            alt="Image Avattar"
            className="size-6 object-cover"
            loading="lazy"
          />
          <span className="text-black font-medium">CryptosRUs</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_369_29191"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="16"
              height="16"
            >
              <rect width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_369_29191)">
              <path
                d="M5.9244 14.3768L4.75133 12.4384L2.54236 11.9435L2.74621 9.68455L1.24878 7.99995L2.74621 6.31535L2.54236 4.05638L4.75133 3.56151L5.9244 1.62305L8.00003 2.50895L10.0757 1.62305L11.2487 3.56151L13.4577 4.05638L13.2538 6.31535L14.7513 7.99995L13.2538 9.68455L13.4577 11.9435L11.2487 12.4384L10.0757 14.3768L8.00003 13.4909L5.9244 14.3768ZM7.15003 10.1691L10.8859 6.44995L10.2667 5.84355L7.15003 8.94355L5.73336 7.53073L5.11415 8.14995L7.15003 10.1691Z"
                fill="#0077ED"
              />
            </g>
          </svg>

          <span className="text-neutral-400 font-medium">@CryptosRUs</span>
          <span>
            <svg
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="2" r="1.5" fill="#D9D9D9" />
            </svg>
          </span>
          <span className="text-neutral-400">4 hour</span>
        </div>
      </div>

      {/* New paragraph */}
      <p className="text-sm text-[#141416] font-medium">
        Lorem ipsum dolor sit amet consectetur. Vitae ac consectetur odio augue
        nunc integer condimentum gravida.
      </p>

      {/* Button Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <EmojiButton
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_369_29561"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_369_29561)">
                  <path
                    d="M14.5513 16.167H5.21158V7.83366L10.6026 2.50672L10.5962 2.29199C10.8248 2.45117 10.9928 2.64562 11.1002 2.87533C11.2076 3.10502 11.2265 3.33899 11.1571 3.57724V3.41699L10.4295 7.83366H16.9872C17.3077 7.83366 17.5845 7.95011 17.8174 8.18301C18.0503 8.41592 18.1667 8.69262 18.1667 9.01314V9.55962C18.1667 9.64937 18.159 9.72869 18.1435 9.7976C18.128 9.86651 18.1047 9.93889 18.0738 10.0147L15.819 15.3465C15.7046 15.6029 15.5332 15.8037 15.3045 15.9491C15.0759 16.0943 14.8248 16.167 14.5513 16.167ZM4.54492 7.83366V16.167H1.83337V7.83366H4.54492Z"
                    fill="#00359E"
                  />
                </g>
              </svg>
            }
          >
            1
          </EmojiButton>
          <span className="text-blueDarkPrimary font-medium text-sm">
            Reply
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MessageSquareMore className="size-4" />
            <span className="text-sm font-medium">0</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCcw className="size-4" />
            <span className="text-sm font-medium">0</span>
          </div>
          <div className="flex items-center gap-2">
            <SmilePlus className="size-4" />
            <span className="text-sm font-medium">2</span>
          </div>
          <Ellipsis className="size-4" />
        </div>
      </div>
    </div>
  );
};

type EmojiButton = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const EmojiButton = ({ children, icon }: EmojiButton) => {
  return (
    <div className="flex items-center gap-1 rounded-full p-1 bg-[#0077ED14]">
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
};
