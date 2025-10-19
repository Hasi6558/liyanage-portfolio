import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    "AWS Educate: Introduction to Cloud 101 (2025)",
    "Oracle Cloud Infrastructure Foundations Associate (2025)",
    "DevOps Foundations: CI/CD – LinkedIn Learning (2025)",
    "Makerspace Training – American Center Colombo (2025)"
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 hover-lift hover-glow animate-fade-in flex items-start gap-3"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/90">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
