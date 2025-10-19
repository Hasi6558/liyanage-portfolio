import { motion } from "framer-motion";
import SkillsRadar from "./SkillsRadar";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT Authentication"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "SQL Server"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "CI/CD", "Railway", "Render", "cPanel"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Testing",
      skills: ["Postman", "Swagger"],
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Other",
      skills: ["Cloud Basics", "AI/ML Integration"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Radar Chart */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SkillsRadar />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="glass-card p-6 hover-glow h-full">
                <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      className="px-3 py-1.5 bg-secondary/50 backdrop-blur-sm rounded-lg text-sm font-medium border border-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIdx * 0.05 }}
                      whileHover={{ scale: 1.1, borderColor: "hsl(199, 89%, 48%)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
