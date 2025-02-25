import Bounded from "@/components/common/containers/bounded";
import React from "react";
import HeadingExchangeDetail from "../../components/heading";
import TabsExchangeDetail from "../../components/tabs";
import NewFeedExchange from "../../components/feeds/feed";
import ExchangeFinancialReservesContent from "./components/content";

const ExchangeFinacialReservesFeatures = () => {
  return (
    <Bounded className="py-12 flex gap-6 divide-x divide-neutral-05">
      <div className="flex flex-col gap-6 flex-1 px-6 overflow-hidden">
        <HeadingExchangeDetail />
        <TabsExchangeDetail />
        <ExchangeFinancialReservesContent />
      </div>
      <div className="flex flex-col gap-6 max-w-[336px] w-full px-6">
        <NewFeedExchange />
      </div>
    </Bounded>
  );
};

export default ExchangeFinacialReservesFeatures;
