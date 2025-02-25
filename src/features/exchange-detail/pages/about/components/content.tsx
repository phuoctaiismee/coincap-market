import Heading from "@/components/common/typography/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { title } from "process";
import { IoIosInformationCircleOutline } from "react-icons/io";

const ContentAbout = () => {
  const data = [
    {
      title: "Latest Insights: Innovations and Developments from Binance",
      content:
        "Hey there! Dive deeper into the latest and greatest in cryptocurrency with Binance! We’ve got all the cool tech, smart trading tips, and expert insights you need to stay ahead in this fast-paced world. Discover how Binance is revolutionizing digital finance and what it means for you, whether you’re an investor, trader, or just curious about crypto. From innovative features to market trends, let’s explore the exciting developments happening in the world of blockchain and crypto together! Get ready to unlock new opportunities and enhance your trading strategies!",
    },
    {
      title: "Analyzing Binance's Influence on Global Financial Markets",
      content:
        "Hey there! Dive deeper into the latest and greatest in cryptocurrency with Binance! We’ve got all the cool tech, smart trading tips, and expert insights you need to stay ahead in this fast-paced world. Discover how Binance is revolutionizing digital finance and what it means for you, whether you’re an investor, trader, or just curious about crypto. From innovative features to market trends, let’s explore the exciting developments happening in the world of blockchain and crypto together! Get ready to unlock new opportunities and enhance your trading strategies!",
    },
    {
      title: "The Next Chapter for Bitcoin: Emerging Trends and Forecasts",
      content:
        "Hey there! Dive deeper into the latest and greatest in cryptocurrency with Binance! We’ve got all the cool tech, smart trading tips, and expert insights you need to stay ahead in this fast-paced world. Discover how Binance is revolutionizing digital finance and what it means for you, whether you’re an investor, trader, or just curious about crypto. From innovative features to market trends, let’s explore the exciting developments happening in the world of blockchain and crypto together! Get ready to unlock new opportunities and enhance your trading strategies!",
    },
    {
      title: "Is Bitcoin the Next Big Thing in Currency? An In-Depth Analysis",
      content:
        "Hey there! Dive deeper into the latest and greatest in cryptocurrency with Binance! We’ve got all the cool tech, smart trading tips, and expert insights you need to stay ahead in this fast-paced world. Discover how Binance is revolutionizing digital finance and what it means for you, whether you’re an investor, trader, or just curious about crypto. From innovative features to market trends, let’s explore the exciting developments happening in the world of blockchain and crypto together! Get ready to unlock new opportunities and enhance your trading strategies!",
    },
    {
      title: "Decoding Bitcoin's Significance in the Digital Economy",
      content:
        "Hey there! Dive deeper into the latest and greatest in cryptocurrency with Binance! We’ve got all the cool tech, smart trading tips, and expert insights you need to stay ahead in this fast-paced world. Discover how Binance is revolutionizing digital finance and what it means for you, whether you’re an investor, trader, or just curious about crypto. From innovative features to market trends, let’s explore the exciting developments happening in the world of blockchain and crypto together! Get ready to unlock new opportunities and enhance your trading strategies!",
    },
    {
      title: "The Evolution of Bitcoin Technology: What's Next?",
      content:
        "Hey there! Dive deeper into the latest and greatest in cryptocurrency with Binance! We’ve got all the cool tech, smart trading tips, and expert insights you need to stay ahead in this fast-paced world. Discover how Binance is revolutionizing digital finance and what it means for you, whether you’re an investor, trader, or just curious about crypto. From innovative features to market trends, let’s explore the exciting developments happening in the world of blockchain and crypto together! Get ready to unlock new opportunities and enhance your trading strategies!",
    },
    {
      title: "Leading Firms Driving the Bitcoin Investment Surge",
      content:
        "Hey there! Dive deeper into the latest and greatest in cryptocurrency with Binance! We’ve got all the cool tech, smart trading tips, and expert insights you need to stay ahead in this fast-paced world. Discover how Binance is revolutionizing digital finance and what it means for you, whether you’re an investor, trader, or just curious about crypto. From innovative features to market trends, let’s explore the exciting developments happening in the world of blockchain and crypto together! Get ready to unlock new opportunities and enhance your trading strategies!",
    },
  ];
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <Heading as="h3" size="xs" className="flex items-center gap-0.5">
          About Binance
          <IoIosInformationCircleOutline className="size-5 text-neutral-04" />
        </Heading>
        <Button variant="link" className="gap-1 text-base">
          Explore More <ChevronRight className="size-4" />
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => (
          <AccordionItem className="border-none" key={index} value={item.title}>
            <AccordionTrigger className="text-lg">{item.title}</AccordionTrigger>
            <AccordionContent className="text-neutral-04 text-base">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ContentAbout;
