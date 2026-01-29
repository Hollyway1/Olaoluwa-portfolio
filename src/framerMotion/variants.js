// src/animations/variants.js

// FadeIn reusable variant
export const fadeIn = ({
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  ease = [0.25, 0.25, 0.25, 0.75],
} = {}) => {
  const offset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  }[direction] || { x: 0, y: 0 };

  return {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    show: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease } },
    exit: { opacity: 0, x: offset.x, y: offset.y, transition: { duration: duration * 0.6, ease } },
  };
};

// Mobile menu animation
export const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};
