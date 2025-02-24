import React from "react";
import { HomeHeading } from "./components/content/heading";
import Bounded from "@/components/common/containers/bounded";
import { NewList } from "./components/content/new-list";
import { UpcomingLive } from "../shared-components/upcoming-live";
import { TrendingTopic } from "../shared-components/trending-topic";
import { TrendingToken } from "../shared-components/trending-token";
import { RecommendAccount } from "../shared-components/recommon-account";
import Link from "next/link";

const SocialHomeFeatures = () => {
  return (
    <Bounded className="w-full">
      <div className="w-full grid grid-cols-12 gap-2">
        {/* Left Column with Divider */}
        <div className="w-full col-span-9 border-r border-neutral-300 pr-4">
          <div className="w-full flex justify-start items-start flex-col gap-2">
            <HomeHeading />
            <NewList />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 pl-3">
          <div className="flex flex-col gap-4">
            <UpcomingLive />
            <TrendingTopic />
            <TrendingToken />
            <RecommendAccount />
            <p className="text-sm font-medium text-neutral-500 italic">
              The data and information contained therein are provided by a third
              party and CoinMarketCap does not create such data. See full terms{" "}
              <Link href="#" className="!text-blueDarkPrimary underline font-semibold">Here</Link>
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default SocialHomeFeatures;
