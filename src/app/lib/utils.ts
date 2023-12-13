import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const cumulativeSum = (
  (sum) => (value: number) =>
    (sum += value)
)(0);

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
// @ts-ignore
export const get = (obj, path, defaultValue = undefined) => {
  // @ts-ignore
  const travel = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      // @ts-ignore
      .reduce(
        // @ts-ignore
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};
