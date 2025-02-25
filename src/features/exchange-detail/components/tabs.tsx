import TabLink from "@/components/custom/tabs/tab-links";
import { COMMON_DATA } from "@/configs";

const TabsExchangeDetail = () => {
  const tabs = COMMON_DATA.exchange.detail_tabs;
  return <TabLink tabs={tabs} />;
};

export default TabsExchangeDetail;
