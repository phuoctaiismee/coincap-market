import React from "react";
import Sidebar from "./components/sidebar";
import Navigation from "./components/navigation";

const SiteHeader = () => {
  return (
    <>
      <div
        className="hidden w-full h-10 lg:flex items-center justify-between"
        style={{
          backgroundImage: `url(/images/bg-header.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Sidebar />
      </div>
      <header className="w-full shadow-[0px_12px_48px_0px_#0000001F] border-b-[0.5px] border-[#C2C2C2] sticky top-0 bg-white z-50">
        <Navigation />
      </header>
    </>
  );
};

export default SiteHeader;
