import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorEffect = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Create sparkle particles occasionally
      if (Math.random() > 0.9) {
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };
        setParticles((prev) => [...prev, newParticle]);

        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Cursor Glow */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(199, 89%, 48%) 0%, transparent 70%)",
        }}
      />

      {/* Sparkle Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-40"
          style={{
            left: particle.x,
            top: particle.y,
            background: "hsl(199, 89%, 68%)",
            boxShadow: "0 0 10px hsl(199, 89%, 68%)",
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [1, 0.8, 0],
            y: [0, -30],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </>
  );
};

export default CursorEffect;
