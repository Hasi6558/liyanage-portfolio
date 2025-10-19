import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="glass-card p-8 hover-glow animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="p-3 gradient-primary rounded-xl">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Freelance Web Developer
              </h3>
              <p className="text-muted-foreground mb-4">
                Fiverr (Remote) | 2023 – Present
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Developed <span className="text-primary font-semibold">3+ full-stack web applications</span> for 
                international clients using <span className="text-primary font-semibold">Node.js, React, and Tailwind CSS</span>. 
                Ensured scalability, clean UI, and seamless API integration with consistent 
                <span className="text-primary font-semibold"> 5-star reviews</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
