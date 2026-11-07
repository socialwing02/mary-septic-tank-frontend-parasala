
import type { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number = 0,
): Variants => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return {
    hidden: {
      ...directions[direction],
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};
