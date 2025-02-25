import TabLink from "@/components/custom/tabs/tab-links";
import { COMMON_DATA } from "@/configs";

const TabsExchange = () => {
  const tabs = COMMON_DATA.exchange.tabs;
  return <TabLink tabs={tabs} />;
};

export default TabsExchange;
