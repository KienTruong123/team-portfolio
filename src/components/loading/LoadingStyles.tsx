import { cn } from "@/libs";
import { FC } from "react";

interface BaseLoading {
  className?: string;
}
export const GridLoading: FC<BaseLoading> = ({ className }) => {
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="h-4 bg-gray-200 rounded-lg w-4/5" />
      <div className="h-4 bg-gray-200 rounded-lg w-full" />
      <div className="h-4 bg-gray-200 rounded-lg w-3/5" />
    </div>
  );
};

export const Grid4Loading: FC<BaseLoading> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      {Array.from({ length: 4 }).map((element, index) => {
        return <div className="w-full h-10 bg-gray-200 rounded-lg" key={index} />;
      })}
    </div>
  );
};

export const CardLoading = () => {
  return <div className="h-80 bg-gray-200 rounded-lg w-full"></div>;
};

export const TextLoading = () => {
  return <div className="h-4 bg-gray-200 rounded-lg w-full flex-1"></div>;
};
