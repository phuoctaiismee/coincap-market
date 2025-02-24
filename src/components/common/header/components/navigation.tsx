import Bounded from "@/components/common/containers/bounded";
import SiteLogo from "../../logos";
import NavItem from "./nav-item";
import { COMMON_DATA } from "@/configs";
import SearchAI from "./search";
import Notification from "./notification";
import UserButton from "./user-button";

const Navigation = () => {
  return (
    <Bounded className="py-4 flex justify-between items-center w-full">
      <div className="flex items-center gap-9">
        <SiteLogo />
        <div className="flex items-center gap-8">
          {COMMON_DATA.navigation.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SearchAI />
        <Notification />
        <UserButton />
      </div>
    </Bounded>
  );
};

export default Navigation;
