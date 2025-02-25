import Heading from "@/components/common/typography/heading";
import Paragraph from "@/components/common/typography/paragraph";
import React from "react";

const HeadingExchange = () => {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph className="max-w-2xl">
        CoinCap.Market evaluates and ranks exchanges based on traffic,
        liquidity, trading volumes and the reliability of reported data.
      </Paragraph>
      <Heading as="h2">
        Top Cryptocurrency <span className="text-primary">Spot Exchanges</span>
      </Heading>
    </div>
  );
};

export default HeadingExchange;
