import React from "react";
import Bounded from "../containers/bounded";
import { COMMON_DATA } from "@/configs";
import Image from "next/image";
import SocialIcons from "./social-icon";
import Link from "next/link";

const SiteFooter = () => {
  return (
    <div className="bg-[#011223]">
      <div
        className="h-[348px] w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(/images/bg-footer.png)`,
          backgroundSize: "cover",
        }}
      >
        <Bounded className="flex flex-col max-w-[960px] gap-6 lg:px-0">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-white text-[28px] leading-[42px] text-center font-semibold">
              Coincap.Market <br /> The ultimate platform for smart investors!
            </h2>
            <p className="text-sm text-[#C2C2C2] text-center">
              Coincap.Market empowers crypto investors with real-time data,
              market insights, and powerful analytics for smarter decisions. <br />
              Track prices, manage portfolios, and stay ahead of trends.
            </p>
          </div>
          <div className="grid grid-cols-4 w-full gap-6">
            {COMMON_DATA.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start justify-center gap-2"
              >
                <h3 className="text-[#01FFFF] text-2xl font-medium">
                  {stat.label}
                </h3>
                <p className="text-[#A3CEF8] text-sm">{stat.value}</p>
              </div>
            ))}
          </div>
        </Bounded>
      </div>
      <Bounded className="flex items-center justify-center flex-1 py-6">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="h-7 w-[179.91140747070312px] relative">
              <Image
                src={COMMON_DATA.footer.logo}
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#F2F2F2] text-sm">
              {COMMON_DATA.footer.description}
            </p>
            <div className="flex items-center gap-3">
              {COMMON_DATA.footer.social.map((social) => (
                <SocialIcons
                  key={social.icon}
                  icon={social.icon as any}
                  href={social.href}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[86px]">
            {COMMON_DATA.footer.links.map((link) => (
              <div key={link.label} className="flex flex-col gap-3">
                <h3 className="text-white text-lg uppercase font-medium">
                  {link.label}
                </h3>
                <div className="flex flex-col gap-2">
                  {link.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm font-normal text-white/[64%]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Bounded>
      <Bounded className="py-6 border-t border-[#ffffff]/[8%]">
        <p className="text-[#F2F2F2] text-sm">{COMMON_DATA.footer.copyright}</p>
      </Bounded>
    </div>
  );
};

export default SiteFooter;
