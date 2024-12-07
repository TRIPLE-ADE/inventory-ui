import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  totalOrder: number;
  sales: number;
}

const products: Product[] = [
  {
    id: "01",
    name: "Thailand Rice 50 Kg",
    totalOrder: 85,
    sales: 45,
  },
  {
    id: "02",
    name: "A carton of Milo",
    totalOrder: 65,
    sales: 29,
  },
  {
    id: "03",
    name: "50 Kg Dangote sugar",
    totalOrder: 40,
    sales: 18,
  },
  {
    id: "04",
    name: "Kings Vegetable Oil 25L",
    totalOrder: 30,
    sales: 25,
  },
];

function getColor(percentage: number): { bg: string; text: string } {
  if (percentage >= 80) return { bg: "bg-blue-500", text: "text-blue-500" };
  if (percentage >= 60) return { bg: "bg-green-500", text: "text-green-500" };
  if (percentage >= 40) return { bg: "bg-purple-500", text: "text-purple-500" };

  return { bg: "bg-orange-500", text: "text-orange-500" };
}

interface ProgressBarProps {
  totalOrder: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalOrder }) => {
  const color = getColor(totalOrder);

  return (
    <div className="w-full lg:min-w-40">
      <div className={cn("h-1 w-full rounded-full bg-opacity-10", color.bg)}>
        <div className={cn("h-1 rounded-full", color.bg)} style={{ width: `${totalOrder}%` }} />
      </div>
    </div>
  );
};

interface SalesBadgeProps {
  totalOrder: number;
  sales: number;
}

const SalesBadge: React.FC<SalesBadgeProps> = ({ totalOrder, sales }) => {
  const color = getColor(totalOrder);

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
        color.text,
        `${color.bg} bg-opacity-10`,
      )}
    >
      {sales}%
    </span>
  );
};

export function BestSellingTable() {
  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Total Order</TableHead>
            <TableHead className="text-right">Sales</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className="hidden md:table-cell">
                <ProgressBar totalOrder={product.totalOrder} />
              </TableCell>
              <TableCell className="text-right">
                <SalesBadge sales={product.sales} totalOrder={product.totalOrder} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
