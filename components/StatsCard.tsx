import React from "react";

import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  containerClassName?: string;
  iconContainerClassName?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  layout = "vertical",
  containerClassName = "",
  iconContainerClassName = "",
}) => {
  return (
    <div className={cn("p-4 rounded-lg shadow-sm bg-white", containerClassName)}>
      <div
        className={cn(
          "flex",
          layout === "vertical"
            ? "flex-col items-start gap-2 justify-between min-h-32"
            : "items-center gap-4",
        )}
      >
        {icon && (
          <div
            className={cn(
              "flex items-center justify-center rounded-full w-8 h-8",
              iconContainerClassName,
            )}
          >
            {icon}
          </div>
        )}
        <div>
          {layout === "vertical" ? (
            <>
              <p className="text-base font-semibold text-gray-800 mb-1">{value}</p>
              <p className="text-sm font-medium text-gray-500">{title}</p>
            </>
          ) : (
            <>
              <p className="text-base font-semibold text-gray-800">{title}</p>
              <p className="text-sm font-medium text-gray-500">{value}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
