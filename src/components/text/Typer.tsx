import styles from "./text.module.css";
import { motion } from "framer-motion";
import { FC } from "react";

interface TyperProps {
  text: string;
  duration: number;
  delay: number;
}

export const Typer: FC<TyperProps> = ({ text, duration, delay, ...props }) => {
  const letters = Array.from(text);
  const container = {
    hidden: {
      opacity: 0,
    },
    show: (i: number) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const item = {
    show: {
      y: 0,
      transition: {
        type: "spring",
        damping: 300,
      },
      opacity: 1,
    },
    hidden: {
      y: "100%",
      opacity: 0,
    },
  };
  return (
    <motion.div className={styles.typer} variants={container} initial="hidden" animate="show" {...props}>
      {letters.map((letter, index) => (
        <motion.span key={index} variants={item}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
