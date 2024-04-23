import React, { FC } from "react";
import Avatar from "./Avatar";
import { cn } from "@/libs";

interface GroupAvatarProps {
  size?: number;
  srcs: string[];
  className?: string;
  step?: number;
}

const GroupAvatar: FC<GroupAvatarProps> = ({ className, size = 50, srcs, step = 15 }) => {
  let moveX = 0;
  const width = size * srcs.length;
  const actualWidth = (width * (100 - step)) / 100;
  return (
    <div className={cn("relative flex", className)} style={{ width: actualWidth }}>
      {srcs.map((src, key) => {
        if (key == 1 || key > 2) moveX += step;
        else if (key == 2) moveX += step * 2;
        return (
          <Avatar
            src={src}
            key={key}
            width={size}
            height={size}
            style={{ transform: `translateX(-${moveX}%)` }}
          ></Avatar>
        );
      })}
    </div>
  );
};

export default GroupAvatar;
