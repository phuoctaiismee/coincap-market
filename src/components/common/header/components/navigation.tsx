import Bounded from "@/components/common/containers/bounded";
import SiteLogo from "../../logos";
import NavItem from "./nav-item";
import { COMMON_DATA } from "@/configs";
import SearchAI from "./search";
import Notification from "./notification";
import UserButton from "./user-button";
import LocaleSwitcher from "./locales-switcher";
import Currency from "./currency";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
const Navigation = () => {
  return (
    <Bounded className="py-3 lg:py-4 flex justify-between items-center w-full">
      <div className="flex items-center gap-9">
        <div className="hidden lg:block">
          <SiteLogo />
        </div>
        <div className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu />
          </Button>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {COMMON_DATA.navigation.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-3">
          <SearchAI />
          <Notification />
          <UserButton />
        </div>
        <div className="lg:hidden flex items-center gap-3">
          <LocaleSwitcher />
          <Currency />
        </div>
      </div>
    </Bounded>
  );
};

export default Navigation;
