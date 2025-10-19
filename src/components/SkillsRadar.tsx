import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SkillsRadar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "React.js", level: 90, color: "hsl(199, 89%, 48%)" },
    { name: "Node.js", level: 85, color: "hsl(142, 71%, 45%)" },
    { name: "Spring Boot", level: 80, color: "hsl(142, 52%, 42%)" },
    { name: "TypeScript", level: 85, color: "hsl(211, 60%, 48%)" },
    { name: "MongoDB", level: 75, color: "hsl(142, 78%, 35%)" },
    { name: "Docker", level: 70, color: "hsl(197, 71%, 47%)" },
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
        const angle = (idx / skills.length) * Math.PI * 2 - Math.PI / 2;
        const radius = (skill.level / 100) * 40; // percentage of container
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={skill.name}
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: `calc(50% + ${x}%)`,
              top: `calc(50% + ${y}%)`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold text-white shadow-lg"
              style={{ backgroundColor: skill.color }}
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
            >
              {skill.level}%
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
