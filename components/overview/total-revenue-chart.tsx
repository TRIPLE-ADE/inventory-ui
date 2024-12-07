"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Rectangle } from "recharts";
import { useMemo } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Title from "../custom/custom-title";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

// Chart data
const rawChartData = [
  { day: "Monday", revenue: 10000 },
  { day: "Tuesday", revenue: 15000 },
  { day: "Wednesday", revenue: 20000 },
  { day: "Thursday", revenue: 6000 },
  { day: "Friday", revenue: 15000 },
  { day: "Saturday", revenue: 20000 },
  { day: "Sunday", revenue: 15000 },
];

export default function TotalRevenueChart() {
  const chartData = useMemo(
    () =>
      rawChartData.map((item) => ({
        ...item,
        fill: item.revenue < 7000 ? "#F40076" : item.revenue < 12000 ? "#FE9920" : "#56E39F",
      })),
    [rawChartData],
  );

  const chartConfig = {
    revenue: {
      label: "Revenue",
    },
    day: {
      label: "Day",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <Title title="Total Revenue" />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer barCategoryGap={27} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis axisLine={false} dataKey="day" tickLine={false} tickMargin={10} />
            <YAxis
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
              tickLine={false}
              tickMargin={10}
            />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <Bar
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.fill}
                    strokeDasharray={4}
                    strokeWidth={2}
                  />
                );
              }}
              dataKey="revenue"
              radius={[8, 8, 0, 0]}
              strokeWidth={2}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
