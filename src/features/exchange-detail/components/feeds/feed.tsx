"use client";
import { Tabs } from "@/components/custom/tabs/vercel-tab";
import React, { useState } from "react";
import CardPost, { CardPostProps, Reaction } from "./card-post";
import CardFeed, { CardFeedProps } from "./card-feed";

const NewFeedExchange = () => {
  const [tab, setTab] = useState<string>("news");
  const tabs = [
    { id: "news", label: "News" },
    { id: "feeds", label: "Feeds" },
  ];
  const posts: CardPostProps[] = [
    {
      author: {
        name: "Bitcoin",
        avatar: "/images/bitcoin.png",
        follow: 560000,
        isFollow: false,
        isVerified: true,
      },
      isNotify: true,
      reactions: [
        { type: "like", count: 904 },
        { type: "favorite", count: 4400 },
        { type: "bad", count: 87 },
      ],
      comments: 175,
      shares: 95,
      reacts: 95,
    },
    {
      author: {
        name: "Bitcoin",
        avatar: "/images/bitcoin.png",
        follow: 560000,
        isFollow: false,
        isVerified: true,
      },
      isNotify: false,
      reactions: [
        { type: "like", count: 904 },
        { type: "favorite", count: 4400 },
        { type: "bad", count: 87 },
      ],
      comments: 175,
      shares: 95,
      reacts: 95,
    },
    {
      author: {
        name: "Bitcoin",
        avatar: "/images/bitcoin.png",
        follow: 560000,
        isFollow: false,
        isVerified: true,
      },
      isNotify: false,
      reactions: [
        { type: "like", count: 904 },
        { type: "favorite", count: 4400 },
        { type: "bad", count: 87 },
      ],
      image: true,
      comments: 175,
      shares: 95,
      reacts: 95,
    },
  ];

  const feeds: CardFeedProps[] = [
    {
      title: "How Bitcoin's Technology is Evolving and Improving",
      description:
        "reBTC - Always has the same value as BTC ✅\n   What is reBTC? A token representing real BTC on the RENEC blockchain. 🪙\nEach 1 reBTC always = 1 BTC. ➗\nBecause RENEC Foundation only releases reBTC when users deposit BTC. 📥\nSo the value of reBTC is always guaranteed 1:1 with real BTC. 🤝\nBTC Reserve: t.co/nxNuOgFtZQ\nreBTC: t.co/5PcrAKhdQX\nThis helps users feel secure when using reBTC on RENEC Blockchain. 😌\n#RENEC #reBTC #reMoney #CaraxDemonWallet",
      image:
        "https://s3-alpha-sig.figma.com/img/f37e/675d/3363462c11ae8b097c81d2d084f80ea5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kwKvjM0NTae3YPuXeTCVXnhPHWXlIvYn00Vo2uXXGuszWEidKxjTlh1JahdYVYibB6k~6t6aJZtS4fvePRPvOD13NGyxHG0kg4USvXXb6XGWOvJArTUXXB-TXYGMrrOCHYCwK6itq5qNhQsl9pVpe8WXbSs4-VM8Mvi1XPx9ecgYqjSzCByMmBH0JwtPBMuvhKuvRmYU6vKfb9mrDiZWLdZ7M-rX5anZVgDRgIZpBTFh6ACkXnHc9B9-y40U9FbFZgje2stp2Osj7JkWscAFEq~GojgkR~-PA~OWSZAtJBc3iXdZ553NztTYecUBry83-NPiJf4lPPK7ez8RxFlZUg__",
      link: "#",
      createdAt: "2021-01-01",
    },
    {
      title: "How Bitcoin's Technology is Evolving and Improving",
      description:
        "reBTC - Always has the same value as BTC ✅\n   What is reBTC? A token representing real BTC on the RENEC blockchain. 🪙\nEach 1 reBTC always = 1 BTC. ➗\nBecause RENEC Foundation only releases reBTC when users deposit BTC. 📥\nSo the value of reBTC is always guaranteed 1:1 with real BTC. 🤝\nBTC Reserve: t.co/nxNuOgFtZQ\nreBTC: t.co/5PcrAKhdQX\nThis helps users feel secure when using reBTC on RENEC Blockchain. 😌\n#RENEC #reBTC #reMoney #CaraxDemonWallet",
      image:
        "https://s3-alpha-sig.figma.com/img/ae38/28c9/3332db7583b67f9ed05b2a1d43fba4d5?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LNMb5VNhKdxzMD6zU5j7qQAJKqqn1yGNGJn1KeD2Uv0FG376Em959JIop9WkzzIoDP5qF4IVNl4r1LKraEuMBr6iwNOc2nuyLOSmln-ojYUvhKzDynXfgGyrcR-K-DgARZcHp3~mqX3ncrXlyRuJqwQUL~w80UOJ~s3wly368ohgb0cbNSkugI8xY6e0VAyy~6QfjDXFUI1cYL7XRlbcOK0VoGiAVKBxHzhFmZVEGKeS4eb7CUw~SFuH3BtMfKGNNFx-PfXAQzZ-5weRgB~qa3suQJhM12NyZb8fWV3VNjpvUUIYJHQcLkeIrk2SZ7dFdKhwxm4YqG29pBymQgTuCA__",
      link: "#",
      createdAt: "2021-01-01",
    },
    {
      title: "How Bitcoin's Technology is Evolving and Improving",
      description:
        "reBTC - Always has the same value as BTC ✅\n   What is reBTC? A token representing real BTC on the RENEC blockchain. 🪙\nEach 1 reBTC always = 1 BTC. ➗\nBecause RENEC Foundation only releases reBTC when users deposit BTC. 📥\nSo the value of reBTC is always guaranteed 1:1 with real BTC. 🤝\nBTC Reserve: t.co/nxNuOgFtZQ\nreBTC: t.co/5PcrAKhdQX\nThis helps users feel secure when using reBTC on RENEC Blockchain. 😌\n#RENEC #reBTC #reMoney #CaraxDemonWallet",
      image:
        "https://s3-alpha-sig.figma.com/img/58e8/687f/47cd3fc40173221f13b4466cdc317c07?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l1e17uXdRaunPifYjYiZ1N0kTXJeMvwofdlHWtUYz1zVwhgskXDQ6SKjpSV8lLx4RS1fs1nMkDAxU~LC-ibJfLfnJmvBlwb9CEhUWLYS9w4dS-RIJdUZyOoIthjBlvWTDrDCejVSJEWTJTKGNKJx1nyFE3IJY1lwe0vM9-gvjiHZNn5asF56fnSCm8iZNgFklapy9MFNhEiAqHeyZ6uLWlDA25Uyhjj-u4~F8WCSyYREEBibU41ez5GcJpF6inL9SCEEOSzDVcCJYa8~pnItfgX~d-aNGJFD8VKqgGn0W-P88GpS5mXMUerlyttdc5RxQHm9E5ye5SIJj7l-ZgYADQ__",
      link: "#",
      createdAt: "2021-01-01",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <Tabs
        className="w-full mb-6"
        tabs={tabs}
        onTabChange={(tabId) => setTab(tabId)}
      />
      {tab === "news" && (
        <div data-lenis-prevent className="flex flex-col gap-4">
          <CardPost {...posts[0]} />
          <div className="h-[1px] bg-neutral-05" />
          <h3 className="text-xl font-bold text-neutral-01">Top trending</h3>
          <CardPost {...posts[1]} />
          <div className="h-[1px] bg-neutral-05" />
          <h3 className="text-xl font-bold text-neutral-01">Latest post</h3>
          <CardPost {...posts[2]} />
        </div>
      )}
      {tab === "feeds" && (
        <div data-lenis-prevent className="flex flex-col divide-y divide-neutral-05">
          {feeds.map((feed, index) => (
            <div className="py-4" key={index}>
              <CardFeed {...feed} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewFeedExchange;
