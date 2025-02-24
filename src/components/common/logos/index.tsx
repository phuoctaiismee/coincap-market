import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteLogo = () => {
  return (
    <Link href="/" className="aspect-[5.75] relative w-[161px] h-[28px]">
      <Image src="/logo.svg" alt="logo" fill className="object-contain" />
    </Link>
  );
};

export default SiteLogo;
