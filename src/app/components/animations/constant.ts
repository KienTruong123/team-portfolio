import { cumulativeSum } from "lib/utils";
const SPEED = 0.2;
// step from 1 -> exclusive first index
export const DURATION_STEPS = [0, 0.5, 1, 0.5, 0.5, 0.5].map((i) => i * SPEED);
export const CUCUMLATIVE_DURATION = DURATION_STEPS.map(cumulativeSum);
