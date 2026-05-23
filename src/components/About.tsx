import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "8+", label: "Projects Delivered" },
  { value: "4+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-card/50 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full border border-primary/10"
        style={{ translateY: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Engineering polished products end-to-end.
              </motion.h3>
              <motion.p
                className="text-lg leading-relaxed text-foreground/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I&apos;m a full-stack and mobile developer with a soft spot for
                clean architecture and pixel perfect interfaces. Over the last
                few years I&apos;ve shipped products for startups, agencies, and
                indie founders from MVPs to production grade platforms scaling
                to thousands of users.
              </motion.p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card/40 p-5 text-center hover:border-primary/40 transition-colors"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary font-display">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
