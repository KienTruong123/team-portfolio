import React, { FC } from "react";
import Image from "next/image";
import { cn } from "@/libs";

interface AvatarProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

const Avatar: FC<typeof Image.defaultProps & AvatarProps> = ({ width = 50, height = 50, className, ...props }) => {
  return <Image {...props} className={cn("rounded-full border-2 border-primary-200", className)} width={width} height={height} alt="avatar" />;
};

export default Avatar;
