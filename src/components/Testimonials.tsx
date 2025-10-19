import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      feedback: "Hasindu delivered an exceptional full-stack solution that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCo",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      feedback: "Working with Hasindu was a breeze. He understood our requirements perfectly and delivered a scalable, performant application on time.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, WebFlow Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      feedback: "Incredible developer! Hasindu's React and Node.js skills are top-notch. He transformed our ideas into a beautiful, functional web app.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                <Card className="glass-card hover-glow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-primary/30"
                        animate={{
                          scale: hoveredIndex === idx ? 1.1 : 1,
                          rotate: hoveredIndex === idx ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + i * 0.05 }}
                        >
                          <Star className="w-4 h-4 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-foreground/80 leading-relaxed">"{testimonial.feedback}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
