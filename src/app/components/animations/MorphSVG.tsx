"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "hooks";
import { useEffect, useState } from "react";
import { star, heart, hand, plane, lightning, note } from "svgs";

const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = ["#00cc88", "#0099ff", "#8855ff", "#ff0055", "#ee4444", "#ffcc00", "#00cc88"];

export const MorphSVG = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const inputRange = paths.map(getIndex);

  const fill = useTransform(progress, inputRange, colors);
  const path = useFlubber(progress, inputRange, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <svg width="100%" height="100%">
      <g transform="translate(10 10) scale(17 17)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
};
