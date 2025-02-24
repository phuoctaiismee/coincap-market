import { Image } from "@/components/common/images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export const QDownload = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-4xl font-bold text-[#101828]">
        <span className="text-blueDarkPrimary">QR </span>Stream code
      </div>

      <Tabs defaultValue={tabs[0].value} className="w-full h-full">
        <TabsList className="h-14 w-full flex items-center gap-4 p-0 bg-background justify-start rounded-none">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none bg-background h-full py-0 data-[state=active]:shadow-none 
              text-[#B1B1B1] font-semibold text-base border-b-2 
              border-transparent data-[state=active]:border-neutral-900 data-[state=active]:font-bold"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.name}
            value={tab?.value}
            className="w-full h-full flex justify-center items-center my-10"
          >
            <div className="w-[550px] bg-white rounded-3xl border border-neutral-200 p-10 mx-auto shadow-2xl">
              <div className="flex flex-col justify-center items-center gap-6">
                <Image
                  src="/assets/images/socials/logo-horizontal.png"
                  alt="Logo"
                />
                <Image
                  src="/assets/images/socials/67d6249638f5e932cd1336bd167927d9.png"
                  alt="Logo"
                />
                <Image
                  src="/assets/images/socials/Frame 22962.png"
                  alt="Logo"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const tabs = [
  {
    name: "App Store",
    value: "appstore",
    content: "pnpm dlx shadcn@latest add tabs",
  },
  {
    name: "Google Play",
    value: "googleplay",
    content: "npx shadcn@latest add tabs",
  },
];
