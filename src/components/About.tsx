import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full border border-primary/10"
        style={{ translateY: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>
        
        <motion.div
          className="glass-card p-8 md:p-12 hover-glow relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p
            className="text-lg leading-relaxed text-foreground/90"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >

              I'm a <span className="text-primary font-semibold">Full-Stack Developer</span> with a strong interest in
              <span className="text-primary font-semibold"> full-stack web development</span> and
              <span className="text-primary font-semibold"> cloud integration</span>. I specialize in building modern, responsive web applications
              using <span className="text-primary font-semibold">React, Node.js, and Spring Boot</span>.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed text-foreground/90 mt-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            My focus is writing <span className="text-primary font-semibold">clean, maintainable code</span> and 
            delivering engaging, high performance user experiences. I'm passionate about leveraging cutting edge
            technologies to solve real-world problems and create impactful digital solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
