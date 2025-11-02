import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import all the SVG logos
import reactLogo from "@/assets/logos/react.svg";
import nodejsLogo from "@/assets/logos/nodejs.svg";
import nextjsLogo from "@/assets/logos/nextjs.svg";
import nestjsLogo from "@/assets/logos/nestjs.svg";
import springLogo from "@/assets/logos/spring.svg";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import expressLogo from "@/assets/logos/express.svg";
import tailwindLogo from "@/assets/logos/tailwind.svg";
import dockerLogo from "@/assets/logos/docker.svg";
import postgresqlLogo from "@/assets/logos/postgresql.svg";

const SkillsRadar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "React.js",
      level: 90,
      color: "hsl(193, 95%, 68%)",
      icon: reactLogo,
      x: -4,
      y: -45,
    },
    {
      name: "Node.js",
      level: 85,
      color: "hsl(142, 71%, 45%)",
      icon: nodejsLogo,
      x: 20,
      y: -15,
    },
    {
      name: "Next.js",
      level: 88,
      color: "hsl(0, 0%, 20%)",
      icon: nextjsLogo,
      x: -30,
      y: -55,
    },
    {
      name: "Nest.js",
      level: 82,
      color: "hsl(0, 84%, 60%)",
      icon: nestjsLogo,
      x: 20,
      y: -60,
    },
    {
      name: "Spring Boot",
      level: 80,
      color: "hsl(142, 52%, 42%)",
      icon: springLogo,
      x: -50,
      y: -12,
    },
    {
      name: "MongoDB",
      level: 75,
      color: "hsl(142, 78%, 35%)",
      icon: mongodbLogo,
      x: -29,
      y: -15,
    },
    {
      name: "Express.js",
      level: 83,
      color: "hsl(0, 0%, 30%)",
      icon: expressLogo,
      x: -3,
      y: 12,
    },
    {
      name: "TailwindCSS",
      level: 92,
      color: "hsl(199, 89%, 48%)",
      icon: tailwindLogo,
      x: -28,
      y: 30,
    },
    {
      name: "Docker",
      level: 70,
      color: "hsl(197, 71%, 47%)",
      icon: dockerLogo,
      x: 15,
      y: 30,
    },
    {
      name: "PostgreSQL",
      level: 78,
      color: "hsl(211, 100%, 50%)",
      icon: postgresqlLogo,
      x: 40,
      y: -10,
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
              className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-2 p-3"
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
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain"
                style={{
                  filter: `brightness(1.1) contrast(1.05)`,
                }}
              />
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
