import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      feedback:
        "Hasindu delivered an exceptional full-stack solution that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      feedback:
        "Working with Hasindu was a breeze. He understood our requirements perfectly and delivered a scalable, performant application on time.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, WebFlow Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      feedback:
        "Incredible developer! Hasindu's React and Node.js skills are top-notch. He transformed our ideas into a beautiful, functional web app.",
      rating: 5,
    },
    {
      name: "David Wilson",
      role: "CTO, StartupLab",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      feedback:
        "Outstanding work! Hasindu's full-stack expertise helped us launch our platform ahead of schedule with exceptional quality.",
      rating: 5,
    },
    {
      name: "Lisa Zhang",
      role: "Lead Designer, CreativeHub",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      feedback:
        "Amazing collaboration! Hasindu brought our designs to life with pixel-perfect precision and smooth animations.",
      rating: 5,
    },
  ];

  // Duplicate testimonials for continuous scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;

    const scrollWidth = scrollContainer.scrollWidth / 2;

    // Use requestAnimationFrame on mobile for better performance
    if (isMobile) {
      let animationFrameId: number;
      let lastTimestamp = 0;
      let scrollPosition = scrollContainer.scrollLeft;

      const scroll = (timestamp: number) => {
        if (isHovered) {
          animationFrameId = requestAnimationFrame(scroll);
          return;
        }

        if (!lastTimestamp) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;

        // Scroll at 60fps (~16ms per frame)
        if (delta >= 16) {
          scrollPosition += 0.5; // Slower on mobile

          if (scrollPosition >= scrollWidth) {
            scrollPosition = 0;
          }

          if (scrollContainer) {
            scrollContainer.scrollLeft = scrollPosition;
          }

          lastTimestamp = timestamp;
        }

        animationFrameId = requestAnimationFrame(scroll);
      };

      animationFrameId = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animationFrameId);
    } else {
      // Desktop: use setInterval (current implementation)
      let scrollPosition = 0;

      const scroll = () => {
        if (!isHovered) {
          scrollPosition += 1;
          if (scrollPosition >= scrollWidth) {
            scrollPosition = 0;
          }
          if (scrollContainer) {
            scrollContainer.scrollLeft = scrollPosition;
          }
        }
      };

      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    }
  }, [isHovered, isMobile]);

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Scrolling Container with Edge Fade Effects */}
        <div className="relative">
          {/* Left Edge Fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Right Edge Fade */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Testimonials */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden overflow-y-hidden hide-scrollbar"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              scrollBehavior: "auto",
            }}
          >
            {duplicatedTestimonials.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.name}-${idx}`}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: isMobile ? 0.3 : 0.6,
                  delay: (idx % testimonials.length) * 0.1,
                }}
              >
                <motion.div
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.05,
                          y: -10,
                        }
                      : undefined
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="glass-card hover-glow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-primary/30"
                          whileHover={
                            !isMobile
                              ? {
                                  scale: 1.1,
                                  rotate: 360,
                                }
                              : undefined
                          }
                          transition={{ duration: isMobile ? 0.3 : 0.6 }}
                          loading="lazy"
                          decoding="async"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay:
                                  (idx % testimonials.length) * 0.1 + i * 0.05,
                              }}
                            >
                              <Star className="w-4 h-4 fill-primary text-primary" />
                            </motion.div>
                          )
                        )}
                      </div>

                      <p className="text-foreground/80 leading-relaxed">
                        "{testimonial.feedback}"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
