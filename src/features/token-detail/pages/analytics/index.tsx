import AverageTransactionFeesCard from "./components/cards/average-transaction-fees-card";
import InvestmentBarometerCard from "./components/cards/investment-barometer-card";
import OverviewCard from "./components/cards/overview-card";
import DescriptionContainer from "./components/description/description-container";

const AnalyticsFeature = () => {
  return (
    <div className="space-y-[26px]">
      <div className="flex items-center justify-between">
        <h2 className="text-28-28-700">Bitcoin Analytics</h2>
      </div>
      <div className="space-y-[24px]">
        <div className="grid grid-cols-3 gap-[24px]">
          <OverviewCard active title="Addresses by Holdings" />
          <OverviewCard title="Whale Holdings" />
          <OverviewCard title="Addresses by Time Held" />
        </div>
        <div className="grid grid-cols-2 gap-[24px]">
          <AverageTransactionFeesCard />
          <InvestmentBarometerCard />
        </div>
      </div>
      <DescriptionContainer />
    </div>
  );
};

export default AnalyticsFeature;
