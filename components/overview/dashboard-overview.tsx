import React from "react";

import OrdersChart from "./orders-chart";
import SummaryCards from "./summary-cards";
import SalesDetails from "./sales-details";
import TotalRevenueChart from "./total-revenue-chart";
import BestSelling from "./best-selling";

const Overview = () => {
  return (
    <>
      <div className="grid md:grid-cols-7 gap-4">
        <SummaryCards />
        <OrdersChart />
      </div>
      <div className="mt-6 grid grid-cols-8">
        <div className="col-span-5">
          <TotalRevenueChart />
          <BestSelling />
        </div>
      </div>
      <SalesDetails />
    </>
  );
};

export default Overview;
