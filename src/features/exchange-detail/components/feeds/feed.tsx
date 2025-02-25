"use client";
import { Tabs } from "@/components/custom/tabs/vercel-tab";
import React from "react";
import CardPost, { CardPostProps, Reaction } from "./card-post";

const NewFeedExchange = () => {
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
  return (
    <div className="flex flex-col w-full">
      <Tabs
        className="w-full mb-6"
        tabs={tabs}
        onTabChange={(tabId) => console.log(`Tab changed to: ${tabId}`)}
      />
      <div data-lenis-prevent className="flex flex-col gap-4">
        <CardPost {...posts[0]} />
        <div className="h-[1px] bg-neutral-05" />
        <h3 className="text-xl font-bold text-neutral-01">Top trending</h3>
        <CardPost {...posts[1]} />
        <div className="h-[1px] bg-neutral-05" />
        <h3 className="text-xl font-bold text-neutral-01">Latest post</h3>
        <CardPost {...posts[2]} />
      </div>
    </div>
  );
};

export default NewFeedExchange;
