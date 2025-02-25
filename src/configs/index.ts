import { Label } from "recharts";

export const API_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "localhost:3000";

export const COMMON_DATA = {
  navigation: [
    {
      label: "Crypto",
      href: "#",
      children: [
        {
          label: "Coins",
          href: "#",
        },
        {
          label: "Exchanges",
          href: "exchange",
        },
        {
          label: "NFTs",
          href: "#",
        },
      ],
    },
    {
      label: "Exchanges",
      href: "#",
      children: [
        {
          label: "Coins",
          href: "#",
        },
        {
          label: "Exchanges",
          href: "#",
        },
        {
          label: "NFTs",
          href: "#",
        },
      ],
    },
    {
      label: "Knowledge",
      href: "#",
    },
    {
      label: "Converter",
      href: "#",
    },
    {
      label: "News",
      href: "/news",
    },
  ],
  stats: [
    {
      label: "10M+",
      value: "Traders and investors use our platform.",
    },
    {
      label: "#03",
      value: "Top 3 Websites Rated by Crypto and Investment Experts",
    },
    {
      label: "4.9+",
      value: "Mobile reviews with 4.9 average rating.",
    },
    {
      label: "12K+",
      value: "Custom scripts and ideas shared by our users.",
    },
  ],
  footer: {
    logo: "/light-logo.svg",
    description:
      "Top cryptocurrency prices and charts, listed by market capitalization",
    social: [
      {
        icon: "facebook",
        href: "#",
      },
      {
        icon: "instagram",
        href: "#",
      },
      {
        icon: "x",
        href: "#",
      },
      {
        icon: "youtube",
        href: "#",
      },
    ],
    copyright: "Coinmarket © 2025 . All rights reserved",
    links: [
      {
        label: "COINCAPNEWS",
        links: [
          {
            label: "Crypto",
            href: "#",
          },
          {
            label: "Exchange",
            href: "#",
          },
          {
            label: "Knowledge",
            href: "#",
          },
          {
            label: "Converters",
            href: "#",
          },
          {
            label: "News",
            href: "#",
          },
        ],
      },
      {
        label: "COMPANY",
        links: [
          {
            label: "About",
            href: "#",
          },
          {
            label: "Privacy",
            href: "#",
          },
          {
            label: "Terms",
            href: "#",
          },
        ],
      },
      {
        label: "SUPPORT",
        links: [
          {
            label: "FAQ",
            href: "#",
          },
          {
            label: "Submit Coin",
            href: "#",
          },
        ],
      },
      {
        label: "Contact",
        links: [
          {
            label: "Chat",
            href: "#",
          },
          {
            label: "Ideas",
            href: "#",
          },
          {
            label: "Scripts",
            href: "#",
          },
          {
            label: "Pricing",
            href: "#",
          },
        ],
      },
    ],
  },
};
