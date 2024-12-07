import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  className: string;
  iconClass: string;
}

export function StatsCard({ title, value, icon: Icon, className, iconClass }: StatsCardProps) {
  return (
    <div className={cn("rounded-lg p-4 text-black", className)}>
      <div className="flex items-center gap-4">
        <div className={cn("flex items-center justify-center w-12 h-12 rounded-full", iconClass)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
