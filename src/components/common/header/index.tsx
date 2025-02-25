import React from "react";
import Sidebar from "./components/sidebar";
import Navigation from "./components/navigation";

const SiteHeader = () => {
  return (
    <div>
      <div
        className="w-full h-10 flex items-center justify-between"
        style={{
          backgroundImage: `url(/images/bg-header.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Sidebar />
      </div>
      <div className="w-full shadow-[0px_12px_48px_0px_#0000001F] border-b-[0.5px] border-[#C2C2C2]">
        <Navigation />
      </div>
    </div>
  );
};

export default SiteHeader;
