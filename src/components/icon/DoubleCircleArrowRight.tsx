import React, { FC } from "react";
import { cn } from "@/libs";
import { GoHorizontalRule } from "react-icons/go";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IconBaseProps } from "react-icons";

interface DoubleCircleArrowRightProps {
  className?: string;
  size?: number;
}

const DoubleCircleArrowRight: FC<DoubleCircleArrowRightProps> = ({ className, size = 56 }) => {
  return (
    <div className={cn("w-full flex", className)} style={{ width: size * 1.9 }}>
      <div className="aspect-square bg-white rounded-full">
        <GoHorizontalRule className="fill-primary-600 translate-x-1/4" size={size} />
      </div>
      <div className="flex-none aspect-square bg-primary-600 rounded-full overflow-hidden border-2 border-white -translate-x-1/3">
        <LiaLongArrowAltRightSolid color="primary" className="fill-white -translate-x-1/4" size={size} />
      </div>
    </div>
  );
};

export default DoubleCircleArrowRight;
