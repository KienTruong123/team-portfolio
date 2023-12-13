"use client";
import { motion } from "framer-motion";
import { Moon } from "./Moon";
import { CUCUMLATIVE_DURATION, DURATION_STEPS } from "./constant";

export const Loading = () => {
  const progess = [2, 5];
  const transitions = progess.map((step) => {
    return { duration: DURATION_STEPS[step], delay: CUCUMLATIVE_DURATION[step - 1] };
  });

  return (
    <div className="h-screen max-h-min">
      <motion.svg width="100%" height="100%">
        <motion.rect fill="#7366d0" width="100%" height="100%" />
        <motion.rect
          fill="#a39ae9"
          width="100%"
          height="100%"
          animate={{ y: ["0%", "-110%", "0%"], fill: ["#a39ae9", "#fce38a"] }}
          transition={transitions[0]}
        />
        <Moon progess={[1, 2, 3, 4]} />
        <motion.circle
          cx="50%"
          cy="50%"
          initial={{ r: "0%", fill: "gray" }}
          animate={{ r: [0, "30%", "100%"] }}
          transition={transitions[1]}
        />
      </motion.svg>
    </div>
  );
};



