import type { Metadata } from "next";
import "./globals.css";
import GlobalRootLayout from "@/layouts/root-layout";
import { getMessages } from "next-intl/server";
import { headers } from "next/headers";
import localFont from "next/font/local";
const sf_pro_display = localFont({
  src: [
    {
      path: "./fonts/sf_pro_display_black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_ultra_light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/sf_pro_display_thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "RTK + Shadcn Core UI",
  description: "RTK + Shadcn Core UI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  return (
    <html
      lang={headersList.get("x-site-locale") ?? "en-US"}
      suppressHydrationWarning
    >
      <body className={`${sf_pro_display.className} antialiased bg-[#F9F9F9]`}>
        <GlobalRootLayout>{children}</GlobalRootLayout>
      </body>
    </html>
  );
}
