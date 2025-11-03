import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import profileImage from "@/assets/profile.svg";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // Mobile-optimized animation settings
  const animationDuration = isMobile ? 0.3 : 0.8;
  const shouldAnimate = !prefersReducedMotion && !isMobile;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: animationDuration, ease: "easeOut" }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: isMobile ? 0.1 : 0.2,
              duration: animationDuration,
            }}
          >
            <p className="text-primary font-medium text-lg">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Hasindu <span className="gradient-text">Liyanage</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Full-Stack Developer
            </p>
          </motion.div>

          <motion.p
            className="text-foreground/80 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: isMobile ? 0.2 : 0.4,
              duration: animationDuration,
            }}
          >
            A results-driven Full-Stack Developer skilled in React, Node.js, and
            latest web technologies. I love crafting seamless, scalable web
            experiences that connect users and technology.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: isMobile ? 0.3 : 0.6,
              duration: animationDuration,
            }}
          >
            <Button
              size="lg"
              className="gradient-primary hover-glow font-semibold group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover-lift"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: isMobile ? 0.4 : 0.8,
              duration: animationDuration,
            }}
          >
            {[
              { href: "https://github.com/Hasi6558", icon: Github },
              {
                href: "https://www.linkedin.com/in/hasinduliyanage",
                icon: Linkedin,
              },
              { href: "mailto:hasindus48@gmail.com", icon: Mail },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="p-3 glass-card rounded-full cursor-hover"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative"
          initial={{
            opacity: 0,
            scale: isMobile ? 0.9 : 0.8,
            y: isMobile ? 20 : 50,
          }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: isMobile ? 0.2 : 0.3,
            duration: animationDuration,
            ease: "easeOut",
          }}
        >
          {/* Animated Lighting Background - Simplified for mobile */}
          {!isMobile && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #0ea5e9, #06b6d4, #8b5cf6, #a855f7, #ec4899, #f43f5e, #0ea5e9)",
                filter: "blur(20px)",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          {/* Static gradient for mobile */}
          {isMobile && (
            <div
              className="absolute inset-0 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, #0ea5e9, #8b5cf6, #ec4899)",
                filter: "blur(15px)",
              }}
            />
          )}

          {/* Secondary pulsing glow */}
          <motion.div
            className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30"
            animate={{
              scale: isMobile ? [1, 1.1, 1] : [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: isMobile ? 2 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Profile Image Container */}
          <motion.div
            className="relative z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm"
            whileHover={!isMobile ? { scale: 1.05 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.img
              src={profileImage}
              alt="Hasindu Liyanage"
              className="w-full h-auto rounded-full object-cover border-2 border-white/20 shadow-2xl"
              whileHover={!isMobile ? { scale: 1.02 } : undefined}
              transition={{ duration: 0.3 }}
              loading="eager"
              decoding="async"
            />
          </motion.div>

          {/* Floating particles - Reduced on mobile */}
          {[...Array(isMobile ? 3 : 6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/60 rounded-full"
              style={{
                left: `${20 + ((i * 60) % 80)}%`,
                top: `${15 + ((i * 35) % 70)}%`,
              }}
              animate={{
                y: isMobile ? [-5, -15, -5] : [-10, -30, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: isMobile ? 1.5 + i * 0.2 : 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
