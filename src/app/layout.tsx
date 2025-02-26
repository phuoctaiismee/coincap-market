import { routing } from "@/i18n/routing";
import GlobalRootLayout from "@/layouts/root-layout";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";
import { META_DATA, WEBSITE_HOST_URL } from "@/configs";
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
    metadataBase: new URL(WEBSITE_HOST_URL),
    title: {
      template: "%s",
      default: META_DATA.title,
    },
    description: META_DATA.description,
    openGraph: {
      title: META_DATA.og_title,
      description: META_DATA.og_description,
      url: WEBSITE_HOST_URL,
      locale: "en-US",
      siteName: META_DATA.title,
      type: "website",
      images: [
        {
          url: META_DATA.image,
        },
      ],
    },
    twitter: {
      title: META_DATA.twitter_title,
      description: META_DATA.twitter_description,
      images: META_DATA.image,
      card: "summary_large_image",
    },
    alternates: {
      canonical: WEBSITE_HOST_URL,
    },
    keywords: META_DATA.keywords,
    icons: {
      icon: [
        {
          url: META_DATA.icon,
          type: "image/png",
        },
        {
          url: META_DATA.icon,
          media: "(prefers-color-scheme: dark)",
          type: "image/png",
        },
        {
          url: META_DATA.icon,
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: META_DATA.icon,
          sizes: "32x32",
          type: "image/png",
        },
      ],
      shortcut: [META_DATA.icon],
      apple: [
        { url: META_DATA.icon },
        {
          url: META_DATA.icon,
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          url: META_DATA.icon,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_KEY,
    },
  };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const headersList = await headers();

  // Enable static params
  setRequestLocale(locale);

  return (
    <html
      lang={headersList.get("x-site-locale") ?? "en-US"}
      suppressHydrationWarning
    >
      <body className={`${sf_pro_display.className} antialiased bg-[#F9F9F9] relative`}>
        <GlobalRootLayout>{children}</GlobalRootLayout>
      </body>
    </html>
  );
}
