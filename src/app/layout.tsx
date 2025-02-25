import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalRootLayout from "@/layouts/root-layout";
import { getMessages } from "next-intl/server";
import { headers } from "next/headers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "RTK + Shadcn Core UI",
  description: "RTK + Shadcn Core UI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const headersList = await headers();
  return (
    <html
      lang={headersList.get("x-site-locale") ?? "en-US"}
      suppressHydrationWarning
    >
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`font-sf antialiased`}
      >
        <GlobalRootLayout>{children}</GlobalRootLayout>
      </body>
    </html>
  );
}
