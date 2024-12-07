"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import Title from "../custom/custom-title";

const chartData = [
  { date: "2024-07-15", onlineOrders: 20, inStoreOrders: 30 },
  { date: "2024-07-16", onlineOrders: 50, inStoreOrders: 40 },
  { date: "2024-07-17", onlineOrders: 40, inStoreOrders: 60 },
  { date: "2024-07-18", onlineOrders: 60, inStoreOrders: 80 },
  { date: "2024-07-19", onlineOrders: 70, inStoreOrders: 50 },
  { date: "2024-07-20", onlineOrders: 30, inStoreOrders: 20 },
  { date: "2024-07-21", onlineOrders: 40, inStoreOrders: 50 },
];

const chartConfig = {
  onlineOrders: {
    label: "Online Orders",
    color: "hsl(220, 70%, 50%)",
  },
  inStoreOrders: {
    label: "In-Store Orders",
    color: "hsl(190, 80%, 60%)",
  },
} satisfies ChartConfig;

export default function OrdersChart() {
  return (
    <Card className="md:col-span-3">
      <CardHeader className="justify-between items-center flex-row">
        <Title title="Orders" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
              This Week
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Today</DropdownMenuItem>
            <DropdownMenuItem>This Week</DropdownMenuItem>
            <DropdownMenuItem>This Month</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart barCategoryGap={27} barGap={100} data={chartData}>
            <CartesianGrid vertical={false} />
            {/* Add Y-axis */}
            <YAxis
              axisLine={false}
              label={{
                value: "Number of Orders",
                angle: -90,
                position: "insideBottomLeft",
                offset: 7,
                style: { fontSize: "0.875rem", fill: "#666" },
              }}
              tickLine={false}
              tickMargin={10}
              width={50}
            />
            <XAxis
              axisLine={false}
              dataKey="date"
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", { weekday: "short" })[0]
              }
              tickLine={false}
              tickMargin={10}
            />
            <Bar
              dataKey="onlineOrders"
              fill={chartConfig.onlineOrders.color}
              radius={[0, 0, 0, 0]}
              stackId="a"
            />
            <Bar
              dataKey="inStoreOrders"
              fill={chartConfig.inStoreOrders.color}
              radius={[8, 8, 0, 0]}
              stackId="a"
            />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <ChartTooltip />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
