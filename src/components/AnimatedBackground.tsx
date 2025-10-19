import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Flowing Gradient Waves */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(199, 89%, 48%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(199, 89%, 68%) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: "hsl(199, 89%, 48%)" }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-15"
        style={{ background: "hsl(199, 89%, 68%)" }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Geometric Motion Elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 border border-primary/10 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-primary/5 rounded-lg"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
