import { motion } from "framer-motion";
import SkillsRadar from "./SkillsRadar";

const Skills = () => {
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SkillsRadar />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
