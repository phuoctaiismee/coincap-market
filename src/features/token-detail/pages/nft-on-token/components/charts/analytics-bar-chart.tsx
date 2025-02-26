"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Define our data structure
interface DataPoint {
  time: string;
  value: number;
}

const AnalyticsBarChart = () => {
  // Sample data based on the image
  const data: DataPoint[] = [
    { time: "06:00 PM", value: 35.25 },
    { time: "07:00 PM", value: 37.5 },
    { time: "08:00 PM", value: 38.0 },
    { time: "09:00 PM", value: 37.25 },
    { time: "10:00 PM", value: 37.5 },
    { time: "11:00 PM", value: 37.0 },
    { time: "12:00 AM", value: 36.25 },
    { time: "01:00 AM", value: 37.25 },
    { time: "02:00 AM", value: 37.0 },
    { time: "03:00 AM", value: 36.75 },
    { time: "04:00 AM", value: 36.25 },
    { time: "05:00 AM", value: 35.75 },
    { time: "05:00 AM", value: 35.75 },
    { time: "05:00 AM", value: 35.75 },
    { time: "05:00 AM", value: 35.75 },
  ];

  // Format for the tooltip
  const formatTooltip = (value: number) => [`${value.toFixed(2)}K`, "Value"];

  return (
    <div className="w-full h-[471px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12 }}
            interval={3}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            orientation="right"
            domain={[35.5, 38.5]}
            tickCount={6}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value.toFixed(2)}K`}
          />
          <Tooltip formatter={formatTooltip} />
          <Bar dataKey="value" fill="#FFB347" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsBarChart;
