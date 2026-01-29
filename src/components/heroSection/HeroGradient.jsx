import { motion } from "framer-motion";

const gradientVariants = {
  float: (i) => ({
    y: [0, -20, 0],
    x: [0, 20 * i, 0],
    opacity: [0.6, 1, 0.6],
    scale: [1, 1.1, 1],
    transition: {
      duration: 6 + i, // slightly offset durations for each layer
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
}; // ✅ semicolon added here

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Cyan Gradient Layers */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-400 via-cyan-300 to-transparent blur-3xl opacity-60"
        custom={1}
        variants={gradientVariants}
        animate="float"
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-transparent blur-2xl opacity-50"
        custom={2}
        variants={gradientVariants}
        animate="float"
      />

      {/* Orange Gradient Layers */}
      <motion.div
        className="absolute top-0 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-orange-400 via-orange-300 to-transparent blur-3xl opacity-60"
        custom={3}
        variants={gradientVariants}
        animate="float"
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-orange-300 via-red-400 to-transparent blur-2xl opacity-50"
        custom={4}
        variants={gradientVariants}
        animate="float"
      />
    </div>
  );
};

export default HeroGradient;
