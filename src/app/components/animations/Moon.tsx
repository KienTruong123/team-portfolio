import { motion } from "framer-motion";
import { FC } from "react";
import { CUCUMLATIVE_DURATION, DURATION_STEPS } from "./constant";

export const Moon: FC<{ color?: string; progess: number[] }> = ({ color = "#7366d0", progess }) => {
  if (!progess || progess?.length < 2) {
    throw new Error("The length of the 'progess' array must be greater than or equal to 2.");
  }

  const transitions = progess.map((step) => {
    return { duration: DURATION_STEPS[step], delay: CUCUMLATIVE_DURATION[step - 1] };
  });

  const endTime = CUCUMLATIVE_DURATION[progess[progess.length - 1]];

  return (
    <motion.svg viewBox="-5 -5 10 10" id="mood" width="100%" height="100%">
      <motion.defs>
        <motion.mask id="mask-mood">
          <motion.rect fill="white" x="-5" y="-5" width="100%" height="100%" />
          <motion.circle fill="black" initial={{ cx: 2.5, r: 4 }} animate={{ cx: 10 }} transition={transitions[0]} />
        </motion.mask>
        <motion.mask id="mask-mood-2">
          <motion.rect fill="black" x="-5" y="-5" width="10" height="10" />
          <motion.rect
            fill="white"
            x="-5"
            y="-15"
            width="10"
            height="10"
            animate={{ y: 10 }}
            transition={transitions[1]}
          />
        </motion.mask>
      </motion.defs>
      <motion.g
        transition={{ ease: "linear", ...transitions[3] }}
        scale={0.6}
        initial={{ rotate: -45 }}
        animate={{ rotate: 315, scale: [0.6, 0.7] }}
      >
        <motion.circle r="4" fill={color} mask="url(#mask-mood)" transform="rotate(-45)" />
        <motion.circle
          r="4"
          fill={"#eaffd0"}
          mask="url(#mask-mood-2)"
          initial={{ r: 4 }}
          animate={{ r: [4, 3, 4.2] }}
          transition={transitions[2]}
        />
        <motion.circle fill="gray" animate={{ r: [0, 0, 1] }} transition={transitions[2]} />
        <motion.circle fill="white" cx={3.5} animate={{ r: [0, 0, 0.3] }} transition={transitions[2]} />
      </motion.g>
    </motion.svg>
  );
};
