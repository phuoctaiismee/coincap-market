import React from "react";
import { RecommendAccount } from "../../shared-components/recommended-account";

const SOCIAL = [
  {
    id: 1,
    name: "Search",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_372_39203"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_372_39203)">
          <path
            d="M19.5423 20.577L13.2616 14.296C12.7616 14.7088 12.1866 15.0319 11.5366 15.2653C10.8866 15.4986 10.2141 15.6153 9.5193 15.6153C7.81014 15.6153 6.36364 15.0235 5.1798 13.84C3.99597 12.6565 3.40405 11.2103 3.40405 9.50152C3.40405 7.79285 3.9958 6.34618 5.1793 5.16152C6.3628 3.97702 7.80897 3.38477 9.5178 3.38477C11.2265 3.38477 12.6731 3.97668 13.8578 5.16051C15.0423 6.34435 15.6346 7.79085 15.6346 9.50002C15.6346 10.2142 15.5147 10.8963 15.2751 11.5463C15.0352 12.1963 14.7153 12.7616 14.3153 13.2423L20.5961 19.523L19.5423 20.577ZM9.5193 14.1155C10.8078 14.1155 11.8991 13.6683 12.7933 12.774C13.6876 11.8798 14.1348 10.7885 14.1348 9.50002C14.1348 8.21152 13.6876 7.12018 12.7933 6.22601C11.8991 5.33168 10.8078 4.88452 9.5193 4.88452C8.2308 4.88452 7.13947 5.33168 6.2453 6.22601C5.35097 7.12018 4.9038 8.21152 4.9038 9.50002C4.9038 10.7885 5.35097 11.8798 6.2453 12.774C7.13947 13.6683 8.2308 14.1155 9.5193 14.1155Z"
            fill="#6D6D6D"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Explore",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_372_39209"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_372_39209)">
          <path
            d="M7.827 16.173L14.2308 14.2308L16.173 7.827L9.76925 9.76925L7.827 16.173ZM11.9978 13.3077C11.6339 13.3077 11.3254 13.1803 11.0723 12.9255C10.8189 12.6708 10.6923 12.3616 10.6923 11.9978C10.6923 11.6339 10.8197 11.3254 11.0745 11.0723C11.3292 10.8189 11.6384 10.6923 12.0022 10.6923C12.3661 10.6923 12.6746 10.8197 12.9277 11.0745C13.1811 11.3292 13.3077 11.6384 13.3077 12.0022C13.3077 12.3661 13.1803 12.6746 12.9255 12.9277C12.6708 13.1811 12.3616 13.3077 11.9978 13.3077ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.223 20 16.1121 19.2224 17.6673 17.6673C19.2224 16.1121 20 14.223 20 12C20 9.777 19.2224 7.88792 17.6673 6.33275C16.1121 4.77758 14.223 4 12 4C9.777 4 7.88792 4.77758 6.33275 6.33275C4.77758 7.88792 4 9.777 4 12C4 14.223 4.77758 16.1121 6.33275 17.6673C7.88792 19.2224 9.777 20 12 20Z"
            fill="#6D6D6D"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Following account",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_372_35614"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_372_35614)">
          <path
            d="M14.1828 6.86498V5.36523H21.6828V6.86498H14.1828ZM14.1828 10.7497V9.24973H21.6828V10.7497H14.1828ZM14.1828 14.6342V13.1345H21.6828V14.6342H14.1828ZM7.93501 13.8075C7.20918 13.8075 6.59143 13.5534 6.08176 13.0452C5.57209 12.5371 5.31726 11.9201 5.31726 11.1942C5.31726 10.4684 5.57134 9.85073 6.07951 9.34123C6.58768 8.83157 7.20468 8.57674 7.93051 8.57674C8.65634 8.57674 9.27409 8.83073 9.78376 9.33873C10.2933 9.8469 10.548 10.4639 10.548 11.1897C10.548 11.9156 10.294 12.5333 9.78601 13.043C9.27784 13.5527 8.66084 13.8075 7.93501 13.8075ZM2.31726 19.4227V17.9075C2.31726 17.6237 2.38618 17.3533 2.52401 17.0965C2.66184 16.8397 2.85193 16.6357 3.09426 16.4845C3.81859 16.06 4.58301 15.7385 5.38751 15.52C6.19218 15.3013 7.04059 15.192 7.93276 15.192C8.82493 15.192 9.67326 15.3013 10.4778 15.52C11.2823 15.7385 12.0468 16.06 12.7713 16.4845C13.0134 16.6357 13.2034 16.8397 13.3413 17.0965C13.4791 17.3533 13.548 17.6237 13.548 17.9075V19.4227H2.31726ZM3.90951 17.769V17.9227H11.9558V17.769C11.3339 17.4163 10.6836 17.1487 10.0048 16.966C9.32593 16.7833 8.63526 16.692 7.93276 16.692C7.23009 16.692 6.53934 16.7833 5.86051 16.966C5.18168 17.1487 4.53134 17.4163 3.90951 17.769ZM7.93276 12.3075C8.24176 12.3075 8.50484 12.1988 8.72201 11.9815C8.93934 11.7642 9.04801 11.501 9.04801 11.192C9.04801 10.883 8.93934 10.6199 8.72201 10.4027C8.50484 10.1854 8.24176 10.0767 7.93276 10.0767C7.62376 10.0767 7.36059 10.1854 7.14326 10.4027C6.92593 10.6199 6.81726 10.883 6.81726 11.192C6.81726 11.501 6.92593 11.7642 7.14326 11.9815C7.36059 12.1988 7.62376 12.3075 7.93276 12.3075Z"
            fill="#6D6D6D"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Create story",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_372_39215"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_372_39215)">
          <path
            d="M11.25 16.75H12.75V12.75H16.75V11.25H12.75V7.25H11.25V11.25H7.25V12.75H11.25V16.75ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="#6D6D6D"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 5,
    name: "More",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_372_35629"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_372_35629)">
          <path
            d="M6.23071 13.5C5.81821 13.5 5.46513 13.3531 5.17146 13.0592C4.87763 12.7656 4.73071 12.4125 4.73071 12C4.73071 11.5875 4.87763 11.2344 5.17146 10.9408C5.46513 10.6469 5.81821 10.5 6.23071 10.5C6.64321 10.5 6.99638 10.6469 7.29021 10.9408C7.58388 11.2344 7.73071 11.5875 7.73071 12C7.73071 12.4125 7.58388 12.7656 7.29021 13.0592C6.99638 13.3531 6.64321 13.5 6.23071 13.5ZM12 13.5C11.5875 13.5 11.2344 13.3531 10.9407 13.0592C10.6469 12.7656 10.5 12.4125 10.5 12C10.5 11.5875 10.6469 11.2344 10.9407 10.9408C11.2344 10.6469 11.5875 10.5 12 10.5C12.4125 10.5 12.7655 10.6469 13.0592 10.9408C13.353 11.2344 13.5 11.5875 13.5 12C13.5 12.4125 13.353 12.7656 13.0592 13.0592C12.7655 13.3531 12.4125 13.5 12 13.5ZM17.7692 13.5C17.3567 13.5 17.0035 13.3531 16.7097 13.0592C16.416 12.7656 16.2692 12.4125 16.2692 12C16.2692 11.5875 16.416 11.2344 16.7097 10.9408C17.0035 10.6469 17.3567 10.5 17.7692 10.5C18.1817 10.5 18.5348 10.6469 18.8285 10.9408C19.1223 11.2344 19.2692 11.5875 19.2692 12C19.2692 12.4125 19.1223 12.7656 18.8285 13.0592C18.5348 13.3531 18.1817 13.5 17.7692 13.5Z"
            fill="#6D6D6D"
          />
        </g>
      </svg>
    ),
  },
];

export const StoryDetailNavigation = () => {
  return (
    <React.Fragment>
      <div className="w-full border border-neutral-300 rounded-xl p-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_372_35604"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="25"
              >
                <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_372_35604)">
                <path
                  d="M12.25 13.625L17.6442 10L12.25 6.375V13.625ZM5.94047 21.846C5.44163 21.9167 4.99388 21.7987 4.59722 21.4923C4.20038 21.1859 3.9718 20.7833 3.91147 20.2845L2.63472 9.9655C2.57438 9.46667 2.69647 9.01825 3.00097 8.62025C3.30547 8.22208 3.70705 7.99608 4.20572 7.94225L5.26922 7.83075V15.423C5.26922 16.4718 5.64163 17.3687 6.38647 18.1135C7.1313 18.8583 8.02813 19.2307 9.07697 19.2307H18.3192C18.2706 19.5474 18.1299 19.8228 17.8972 20.0568C17.6644 20.2908 17.3794 20.4295 17.0422 20.473L5.94047 21.846ZM9.07697 17.2308C8.5718 17.2308 8.14422 17.0557 7.79422 16.7057C7.44422 16.3557 7.26922 15.9282 7.26922 15.423V4.80775C7.26922 4.30258 7.44422 3.875 7.79422 3.525C8.14422 3.175 8.5718 3 9.07697 3H19.6922C20.1974 3 20.625 3.175 20.975 3.525C21.325 3.875 21.5 4.30258 21.5 4.80775V15.423C21.5 15.9282 21.325 16.3557 20.975 16.7057C20.625 17.0557 20.1974 17.2308 19.6922 17.2308H9.07697Z"
                  fill="#00359E"
                />
              </g>
            </svg>
            <span className="text-blueDarkPrimary font-semibold text-lg">
              For you
            </span>
          </div>
          {SOCIAL?.map((social) => (
            <div key={social?.id} className="flex items-center gap-4">
              {social?.icon}

              <span className="text-[#6D6D6D] font-medium text-sm">
                {social?.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <RecommendAccount title="Suggestions for your" />
    </React.Fragment>
  );
};
