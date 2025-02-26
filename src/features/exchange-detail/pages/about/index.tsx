import React from "react";
import HeadingExchangeDetail from "../../components/heading";
import Bounded from "@/components/common/containers/bounded";
import TabsExchangeDetail from "../../components/tabs";
import ContentAbout from "./components/content";
import NewFeedExchange from "../../components/feeds/feed";

const ExchangeAboutFeatures = () => {
  return (
    <Bounded className="py-12 flex gap-6 divide-x divide-neutral-05">
      <div className="flex flex-col gap-6 flex-1 px-6">
        <HeadingExchangeDetail />
        <TabsExchangeDetail />
        <ContentAbout />
      </div>
      <div className="hidden lg:flex flex-col gap-6 max-w-[336px] w-full px-6">
        <NewFeedExchange />
      </div>
    </Bounded>
  );
};

export default ExchangeAboutFeatures;
