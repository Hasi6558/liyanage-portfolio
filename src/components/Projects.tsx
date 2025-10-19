import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = ["All", "Full-Stack", "Backend", "Frontend", "ML/AI"];

  const projects = [
    {
      title: "Odyssey – Travel Planning Platform",
      description: "A complete travel planning platform with hotel booking, itineraries, and reservations. Secured APIs using JWT and deployed via Railway.",
      tech: ["React.js", "Spring Boot", "MongoDB"],
      category: "Full-Stack",
      links: [
        { type: "github", url: "https://github.com/Hasi6558/Odyssey-Travel-Planning-site-Frontend", label: "Frontend" },
        { type: "github", url: "https://github.com/Hasi6558/Odyssey-Travel-Planning-Site-Backend", label: "Backend" }
      ]
    },
    {
      title: "Netflix Clone",
      description: "Built a movie streaming backend with search, history, and playback tracking features. Tested APIs with Postman and Swagger.",
      tech: ["React.js", "Spring Boot", "MySQL"],
      category: "Full-Stack",
      links: [
        { type: "github", url: "https://github.com/Hasi6558/Netflix-MVP" }
      ]
    },
    {
      title: "FitLab – Gym Website",
      description: "Created a responsive gym website with member management and booking system.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Frontend",
      links: [
        { type: "github", url: "https://github.com/Hasi6558/FitLab-GymWebsite.git" }
      ]
    },
    {
      title: "GlucoVision – ML Based Blood Glucose Monitoring",
      description: "Designed an ML model that predicts blood glucose levels using reagent-mixed blood sample images and automated image processing.",
      tech: ["Python", "TensorFlow", "scikit-learn"],
      category: "ML/AI",
      links: []
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "glass-card hover:bg-primary/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
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
                  rotateX: -5,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                <Card className="glass-card border-primary/20 hover-glow h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300"
                    animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                  />
                  <CardHeader className="relative">
                    <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-foreground/80 text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIdx) => (
                        <motion.span
                          key={techIdx}
                          className="px-3 py-1 bg-primary/10 rounded-lg text-sm font-medium text-primary"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIdx * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {project.links.length > 0 && (
                      <div className="flex gap-3">
                        {project.links.map((link, linkIdx) => (
                          <Button 
                            key={linkIdx}
                            variant="outline" 
                            size="sm"
                            className="border-primary/30 hover:bg-primary/10 hover-lift"
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              {link.label || "Code"}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
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

export default Projects;
