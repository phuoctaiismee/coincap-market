"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

const SlideTabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, activeTab, onTabChange, ...props }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverStyle, setHoverStyle] = useState({});
    const [activeStyle, setActiveStyle] = useState({
      left: "0px",
      width: "0px",
    });
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      if (hoveredIndex !== null) {
        const hoveredElement = tabRefs.current[hoveredIndex];
        if (hoveredElement) {
          const { offsetLeft, offsetWidth } = hoveredElement;
          setHoverStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          });
        }
      }
    }, [hoveredIndex]);

    useEffect(() => {
      const activeElement = tabRefs.current[activeIndex];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }, [activeIndex]);

    useEffect(() => {
      requestAnimationFrame(() => {
        const firstElement = tabRefs.current[0];
        if (firstElement) {
          const { offsetLeft, offsetWidth } = firstElement;
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          });
        }
      });
    }, []);

    return (
      <div
        ref={ref}
        style={{
          boxShadow: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), linear-gradient(156.52deg, rgba(0, 0, 0, 0.4) 2.12%, rgba(0, 0, 0, 0.0001) 39%, rgba(0, 0, 0, 0.0001) 54.33%, rgba(0, 0, 0, 0.1) 93.02%)",
        }}
        className="p-[1px] h-[35px] rounded-full"
      >
        <div
          className={cn(
            "relative border w-full p-[3px] h-full bg-white rounded-full",
            className
          )}
          {...props}
        >
          <div className="relative w-full h-full">
            {/* Hover Highlight */}
            <div
              className="absolute h-full top-1/2 -translate-y-1/2 transition-all duration-300 ease-out bg-[#0e0f1114] dark:bg-[#ffffff1a] rounded-full flex items-center"
              style={{
                ...hoverStyle,
                opacity: hoveredIndex !== null ? 1 : 0,
              }}
            />

            {/* Active Indicator */}
            <div
              className="absolute inset-0 rounded-full bg-[#0e0f11] transition-all duration-300 ease-out"
              style={activeStyle}
            />

            {/* Tabs */}
            <div className="relative flex items-center w-full h-full">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  ref={(el) => {
                    if (el) {
                      tabRefs.current[index] = el;
                    }
                  }}
                  className={cn(
                    "px-[24px] cursor-pointer transition-colors duration-300 h-full w-full",
                    index === activeIndex
                      ? "text-white"
                      : "text-[#0e0f1199] dark:text-[#ffffff99]"
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setActiveIndex(index);
                    onTabChange?.(tab.id);
                  }}
                >
                  <div className="text-12-18-600 whitespace-nowrap flex items-center justify-center h-full w-full">
                    {tab.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
SlideTabs.displayName = "SlideTabs";

export { SlideTabs };
