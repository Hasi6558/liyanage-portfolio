import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Sparkles } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Generate confetti
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setConfetti(newConfetti);

    setTimeout(() => {
      setIsSubmitted(false);
      setConfetti([]);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <motion.div
      className="relative glass-card p-8 md:p-12 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(199, 89%, 48%) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(199, 89%, 68%) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(199, 89%, 48%) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Success State */}
      <AnimatePresence>
        {isSubmitted && (
          <>
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-background/95 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(199, 89%, 48%, 0.4)",
                      "0 0 0 40px hsl(199, 89%, 48%, 0)",
                    ],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Check className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-foreground/80">I'll get back to you soon.</p>
              </motion.div>
            </motion.div>

            {/* Confetti */}
            {confetti.map((piece) => (
              <motion.div
                key={piece.id}
                className="absolute w-3 h-3 rounded-full z-30"
                style={{
                  left: `${piece.x}%`,
                  top: `${piece.y}%`,
                  background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                }}
                initial={{ scale: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  y: [0, -200],
                  x: [(Math.random() - 0.5) * 100],
                  rotate: [0, 360],
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="glass-card border-primary/20 focus:border-primary"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="glass-card border-primary/20 focus:border-primary"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="glass-card border-primary/20 focus:border-primary min-h-[150px]"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              size="lg"
              className="w-full gradient-primary hover-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Sparkles className="w-5 h-5 ml-2 relative z-10" />
            </Button>
          </motion.div>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
