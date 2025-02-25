import React from "react";
import { ShineBorder } from "@/components/common/containers/shine-border";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchAI = () => {
  return (
    <ShineBorder
      className="relative rounded-full p-0 flex items-center pl-2"
      borderRadius={100}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <Image src="/ai-icon.svg" alt="search" width={24} height={24} />
      <Input
        placeholder="AI-Powered Search"
        className="rounded-full border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none placeholder:text-ai-gradient"
      />
    </ShineBorder>
  );
};

export default SearchAI;
