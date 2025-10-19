import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>
        
        <motion.p
          className="text-lg text-center text-foreground/80 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Whether you're looking for a freelance developer, a full-time team member, or just want to connect — feel free to reach out!
        </motion.p>

        <ContactForm />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              icon: Mail,
              title: "Email",
              content: "hasindus48@gmail.com",
              href: "mailto:hasindus48@gmail.com",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              content: "/hasinduliyanage",
              href: "https://www.linkedin.com/in/hasinduliyanage",
            },
            {
              icon: Github,
              title: "GitHub",
              content: "@Hasi6558",
              href: "https://github.com/Hasi6558",
            },
          ].map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex flex-col items-center p-6 glass-card hover-glow cursor-pointer"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + idx * 0.1 }}
            >
              <motion.div
                className="p-3 rounded-full bg-primary/10 mb-4"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <contact.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
              <span className="text-foreground/70 hover:text-primary transition-colors">
                {contact.content}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
