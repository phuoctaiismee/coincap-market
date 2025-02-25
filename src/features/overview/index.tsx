import Bounded from "@/components/common/containers/bounded";
import FilterActions from "./components/table/filter-actions";
import TabsList from "./components/table/tabs-list";
import TokenTables from "./components/table/tokens-table";
import CryptoCard from "./components/ui/crypto-card ";
import Heading from "./components/ui/heading";
import TradingTokenCard from "./components/ui/trading-token-card";

const Overview = () => {
  return (
    <Bounded>
      <div className="py-[48px] space-y-[20px]">
        <Heading
          highlightText="Cryptocurrency"
          title="Today's Cryptocurrency Prices"
        />
        <div className="grid grid-cols-4 gap-[16px]">
          <CryptoCard
            changeAmount={2}
            changePercent={3}
            name="Bitcoin"
            price={40000}
            symbol="BTC"
            type="up"
            variant="border"
          />
          <CryptoCard
            changeAmount={2}
            changePercent={3}
            name="Bitcoin"
            price={40000}
            symbol="BTC"
            type="down"
          />
          <CryptoCard
            changeAmount={2}
            changePercent={3}
            name="Bitcoin"
            price={40000}
            symbol="BTC"
            type="down"
          />
          <TradingTokenCard />
        </div>
      </div>
      <div className="py-[48px] space-y-[36px]">
        <div className="space-y-[8px] relative">
          <div className="text-neutral-04 text-16-24-600">
            Uncover promising coins & big opportunities!
          </div>
          <div className="text-36-47-700 text-neutral-00">
            CoinCap.Market Watch
          </div>
          <div className="flex justify-between items-end">
            <TabsList />
            <FilterActions />
          </div>
        </div>
        <TokenTables />
      </div>
    </Bounded>
  );
};

export default Overview;
