import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="glass-card p-8 hover-glow animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="p-3 gradient-primary rounded-xl">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                B.Sc. (Hons) in Electronics & Computer Science
              </h3>
              <p className="text-muted-foreground mb-2">
                University of Kelaniya, Sri Lanka
              </p>
              <p className="text-foreground/80 mb-4">
                2022 – Present | <span className="text-primary font-semibold">GPA: 3.68/4.00</span>
              </p>
              <p className="text-foreground/90">
                <span className="font-semibold text-primary">Relevant Coursework:</span> Software Engineering, 
                Web Development, Database Systems, Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
