// Import required modules
import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";

// Define a function to get the index of a value in an array
export const getIndex = (_: any, index: number) => index;

/**
 * @param progress: A MotionValue representing the progress of the animation
 * @param inputRange: A linear series of numbers (either all increasing or decreasing)
 * @param paths: An array of SVG paths representing the shapes to morph between
 * @returns `MotionValue`
 */
export function useFlubber(progress: MotionValue<number>, inputRange: InputRange, paths: string[]) {
  return useTransform(progress, inputRange, paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}
