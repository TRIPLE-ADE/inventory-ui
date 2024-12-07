import Title from "../custom/custom-title";
import { Card, CardContent, CardHeader } from "../ui/card";

import { BestSellingTable } from "./best-selling-table";

const BestSelling = () => {
  return (
    <Card>
      <CardHeader>
        <Title title="Best Selling" />
      </CardHeader>
      <CardContent>
        <BestSellingTable />
      </CardContent>
    </Card>
  );
};

export default BestSelling;
