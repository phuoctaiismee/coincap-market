import { Image } from "@/components/common/images";
import {
  MessageSquareMore,
  PlusIcon,
  RefreshCcw,
  SmilePlus,
} from "lucide-react";
import React from "react";
import OutlineButton from "./outline-button";
import { Link } from "@/i18n/routing";

const NewCard = () => {
  // const headersList = await headers();
  // headersList.get("x-site-locale") ?? "en-US";

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
          <span className="text-black text-sm font-medium">CryptosRUs</span>
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

          <span className="text-[#6D6D6D] text-sm">@CryptosRUs</span>
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
          <span className="text-sm text-[#939393]">4 hour</span>
        </div>
        <OutlineButton className="font-semibold">
          <span className="flex items-center gap-2">
            <PlusIcon className="size-4" />
            Follow
          </span>
        </OutlineButton>
      </div>

      {/* New paragraph */}
      <Link href={`/news/new-abc`} className="text-sm text-[#141416]">
        Lorem ipsum dolor sit amet consectetur. Sodales quam nam imperdiet risus
        sed. Sit a commodo sit mi scelerisque interdum magna amet.
      </Link>

      {/* New Image */}
      <Link href={`/news/new-abc`} className="size-full rounded-3xl max-h-[28.125rem] overflow-hidden">
        <Image
          src="/assets/images/socials/f7351379eac64a2cdd07c99f04e84fbb.png"
          alt="Image Avattar"
          className="size-full object-cover"
          loading="lazy"
        />
      </Link>

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
            904
          </EmojiButton>
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
                  id="mask0_369_29566"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_369_29566)">
                  <path
                    d="M10 15.8779L9.53529 15.4532C8.18914 14.2385 7.07803 13.2061 6.20196 12.3563C5.32589 11.5064 4.64079 10.7644 4.14667 10.1303C3.65254 9.4962 3.31013 8.92649 3.11944 8.42115C2.92873 7.91581 2.83337 7.40726 2.83337 6.89551C2.83337 5.90512 3.17953 5.06377 3.87183 4.37147C4.56414 3.67916 5.40549 3.33301 6.39587 3.33301C7.08711 3.33301 7.74683 3.51356 8.37504 3.87467C9.00325 4.23579 9.54492 4.76036 10 5.44838C10.4552 4.76036 10.9968 4.23579 11.625 3.87467C12.2532 3.51356 12.913 3.33301 13.6042 3.33301C14.5946 3.33301 15.4359 3.67916 16.1282 4.37147C16.8206 5.06377 17.1667 5.90512 17.1667 6.89551C17.1667 7.40726 17.0748 7.90886 16.8911 8.40032C16.7073 8.89177 16.3684 9.45106 15.8742 10.0782C15.3801 10.7053 14.6942 11.4508 13.8166 12.3146C12.9389 13.1784 11.8077 14.2385 10.4231 15.4949L10 15.8779Z"
                    fill="#F42829"
                  />
                </g>
              </svg>
            }
          >
            4.4K
          </EmojiButton>
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
                  id="mask0_369_29571"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_369_29571)">
                  <path
                    d="M12.5936 9.17915C12.8528 9.17915 13.0719 9.08842 13.2509 8.90697C13.4298 8.72549 13.5193 8.50514 13.5193 8.2459C13.5193 7.98667 13.4285 7.76757 13.2471 7.58861C13.0656 7.40967 12.8453 7.3202 12.586 7.3202C12.3268 7.3202 12.1077 7.41092 11.9287 7.59238C11.7498 7.77386 11.6603 7.99421 11.6603 8.25345C11.6603 8.51268 11.751 8.73178 11.9325 8.91074C12.114 9.08968 12.3343 9.17915 12.5936 9.17915ZM7.41406 9.17915C7.6733 9.17915 7.8924 9.08842 8.07135 8.90697C8.25031 8.72549 8.33979 8.50514 8.33979 8.2459C8.33979 7.98667 8.24905 7.76757 8.06758 7.58861C7.88611 7.40967 7.66576 7.3202 7.40652 7.3202C7.14728 7.3202 6.92819 7.41092 6.74923 7.59238C6.57028 7.77386 6.48081 7.99421 6.48081 8.25345C6.48081 8.51268 6.57154 8.73178 6.753 8.91074C6.93447 9.08968 7.15483 9.17915 7.41406 9.17915ZM10 10.9997C9.20517 10.9997 8.48001 11.2328 7.82456 11.6992C7.1691 12.1655 6.66617 12.7614 6.31575 13.4869H7.41671C7.69332 13.0244 8.06108 12.6587 8.52 12.39C8.97892 12.1212 9.47226 11.9869 10 11.9869C10.5278 11.9869 11.0212 12.1212 11.4801 12.39C11.939 12.6587 12.3068 13.0244 12.5834 13.4869H13.6843C13.3339 12.7614 12.831 12.1655 12.1755 11.6992C11.5201 11.2328 10.7949 10.9997 10 10.9997ZM10.0086 17.1663C9.02317 17.1663 8.0948 16.98 7.22346 16.6072C6.35211 16.2344 5.58916 15.7211 4.9346 15.0672C4.28006 14.4132 3.76622 13.6513 3.39308 12.7814C3.01994 11.9115 2.83337 10.982 2.83337 9.9929C2.83337 9.00382 3.01976 8.07708 3.39252 7.21267C3.7653 6.34827 4.27864 5.58879 4.93256 4.93424C5.58648 4.2797 6.34839 3.76586 7.21831 3.39272C8.08823 3.01958 9.01773 2.83301 10.0068 2.83301C10.9959 2.83301 11.9226 3.01939 12.787 3.39215C13.6514 3.76493 14.4109 4.27828 15.0655 4.9322C15.72 5.58611 16.2339 6.3464 16.607 7.21307C16.9801 8.07974 17.1667 9.00576 17.1667 9.99115C17.1667 10.9765 16.9803 11.9049 16.6076 12.7763C16.2348 13.6476 15.7214 14.4106 15.0675 15.0651C14.4136 15.7197 13.6533 16.2335 12.7866 16.6066C11.92 16.9798 10.994 17.1663 10.0086 17.1663Z"
                    fill="#FFBA51"
                  />
                </g>
              </svg>
            }
          >
            87
          </EmojiButton>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <MessageSquareMore className="size-4" />
            <span className="text-sm font-medium">175</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCcw className="size-4" />
            <span className="text-sm font-medium">95</span>
          </div>
          <div className="flex items-center gap-2">
            <SmilePlus className="size-4" />
            <span className="text-sm font-medium">95</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

type EmojiButton = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const EmojiButton = ({ children, icon }: EmojiButton) => {
  return (
    <div className="flex items-center gap-1 rounded-full py-1 px-2 bg-[#0077ED14]">
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
};
