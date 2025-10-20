import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SkillsRadar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "React.js",
      level: 90,
      color: "hsl(199, 89%, 48%)",
      icon: "⚛️",
      x: 0,
      y: -35,
    },
    {
      name: "Node.js",
      level: 85,
      color: "hsl(142, 71%, 45%)",
      icon: "🟢",
      x: 30,
      y: -20,
    },
    {
      name: "Next.js",
      level: 88,
      color: "hsl(0, 0%, 0%)",
      icon: "▲",
      x: 35,
      y: 10,
    },
    {
      name: "Nest.js",
      level: 82,
      color: "hsl(0, 100%, 50%)",
      icon: "🐈",
      x: 20,
      y: 30,
    },
    {
      name: "Spring Boot",
      level: 80,
      color: "hsl(142, 52%, 42%)",
      icon: "🍃",
      x: -10,
      y: 35,
    },
    {
      name: "MongoDB",
      level: 75,
      color: "hsl(142, 78%, 35%)",
      icon: "🍃",
      x: -30,
      y: 25,
    },
    {
      name: "Express.js",
      level: 83,
      color: "hsl(0, 0%, 30%)",
      icon: "⚡",
      x: -35,
      y: 0,
    },
    {
      name: "TailwindCSS",
      level: 92,
      color: "hsl(199, 89%, 48%)",
      icon: "💨",
      x: -25,
      y: -25,
    },
    {
      name: "Docker",
      level: 70,
      color: "hsl(197, 71%, 47%)",
      icon: "🐋",
      x: 15,
      y: -30,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Radar Circles */}
      {[100, 75, 50, 25].map((radius, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full border border-primary/10"
          style={{
            width: `${radius}%`,
            height: `${radius}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
        />
      ))}

      {/* Skill Bubbles */}
      {skills.map((skill, idx) => {
        return (
          <motion.div
            key={skill.name}
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: `calc(50% + ${skill.x}%)`,
              top: `calc(50% + ${skill.y}%)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-lg backdrop-blur-sm border-2"
              style={{
                backgroundColor: `${skill.color}20`,
                borderColor: skill.color,
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${skill.color}40`,
                  `0 0 40px ${skill.color}60`,
                  `0 0 20px ${skill.color}40`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            >
              {skill.icon}
            </motion.div>
            <span className="mt-2 text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
              {skill.name}
            </span>
          </motion.div>
        );
      })}

      {/* Center Point */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-primary"
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            "0 0 10px hsl(199, 89%, 48%)",
            "0 0 30px hsl(199, 89%, 48%)",
            "0 0 10px hsl(199, 89%, 48%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default SkillsRadar;
