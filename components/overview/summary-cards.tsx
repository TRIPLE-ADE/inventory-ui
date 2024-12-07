import React from "react";
import { BarChart2, File, LucideDownload, Tag, UserPlus } from "lucide-react";

import Title from "../custom/custom-title";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import StatsCard from "../StatsCard";
import { Button } from "../ui";

const SummaryCards = () => {
  return (
    <Card className="md:col-span-4">
      <CardHeader className="flex-row items-start justify-between">
        <div>
          <Title title={`Today's Sales`} />
          <CardDescription className="mt-2">Sales Summary</CardDescription>
        </div>
        <Button variant="outline">
          <LucideDownload className="w-4 h-4 mr-2" />
          <span>Export</span>
        </Button>
      </CardHeader>
      <CardContent className="grid md:grid-cols-4 pb-0 gap-4">
        <StatsCard
          containerClassName="bg-[#FFEDED]"
          icon={<BarChart2 className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#FF6B6B]"
          title="Total Sales"
          value="₦1.5M"
        />
        <StatsCard
          containerClassName="bg-[#FFF4DE]"
          icon={<File className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#FF947A]"
          title="Total Orders"
          value="200"
        />
        <StatsCard
          containerClassName="bg-[#DCFCE7]"
          icon={<Tag className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#3CD856]"
          title="Product Sold"
          value="100"
        />
        <StatsCard
          containerClassName="bg-[#F3E8FF]"
          icon={<UserPlus className="text-white w-4 h-4" />}
          iconContainerClassName="bg-[#BF83FF]"
          title="New Users"
          value="200"
        />
      </CardContent>
    </Card>
  );
};

export default SummaryCards;
