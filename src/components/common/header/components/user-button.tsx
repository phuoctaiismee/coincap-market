import { Button } from "@/components/ui/button";
import React from "react";

const UserButton = () => {
  return (
    <Button className="size-12  rounded-full bg-[#222222]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="!size-6"
      >
        <mask
          id="mask0_353_43553"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_353_43553)">
          <path
            d="M6.19625 17.4845C7.04625 16.873 7.94817 16.3894 8.902 16.0337C9.85583 15.6779 10.8885 15.5 12 15.5C13.1115 15.5 14.1442 15.6779 15.098 16.0337C16.0518 16.3894 16.9538 16.873 17.8038 17.4845C18.4641 16.8012 18.9952 15.9942 19.397 15.0635C19.799 14.1327 20 13.1115 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 13.1115 4.201 14.1327 4.603 15.0635C5.00483 15.9942 5.53592 16.8012 6.19625 17.4845ZM12 12.5C11.1577 12.5 10.4471 12.2106 9.86825 11.6318C9.28942 11.0529 9 10.3423 9 9.5C9 8.65767 9.28942 7.94708 9.86825 7.36825C10.4471 6.78942 11.1577 6.5 12 6.5C12.8423 6.5 13.5529 6.78942 14.1318 7.36825C14.7106 7.94708 15 8.65767 15 9.5C15 10.3423 14.7106 11.0529 14.1318 11.6318C13.5529 12.2106 12.8423 12.5 12 12.5ZM12 21C10.7448 21 9.56983 20.7663 8.475 20.299C7.38017 19.8317 6.42758 19.1929 5.61725 18.3828C4.80708 17.5724 4.16833 16.6198 3.701 15.525C3.23367 14.4302 3 13.2552 3 12C3 10.7448 3.23367 9.56983 3.701 8.475C4.16833 7.38017 4.80708 6.42758 5.61725 5.61725C6.42758 4.80708 7.38017 4.16833 8.475 3.701C9.56983 3.23367 10.7448 3 12 3C13.2552 3 14.4302 3.23367 15.525 3.701C16.6198 4.16833 17.5724 4.80708 18.3828 5.61725C19.1929 6.42758 19.8317 7.38017 20.299 8.475C20.7663 9.56983 21 10.7448 21 12C21 13.2552 20.7663 14.4302 20.299 15.525C19.8317 16.6198 19.1929 17.5724 18.3828 18.3828C17.5724 19.1929 16.6198 19.8317 15.525 20.299C14.4302 20.7663 13.2552 21 12 21Z"
            fill="white"
          />
        </g>
      </svg>
    </Button>
  );
};

export default UserButton;
