import { Heart } from "lucide-react";

const Volunteering = () => {
  const volunteering = [
    "Fundraising Co-Coordinator – UOK Robo Battle 2K24",
    "Sponsorship & Finance Team – FOSS Community, University of Kelaniya",
    "Technical Officer – Sri Lanka Taekwondo Federation (2023 – Present)"
  ];

  return (
    <section id="volunteering" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Community & <span className="gradient-text">Volunteering</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="space-y-4">
          {volunteering.map((activity, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 hover-lift hover-glow animate-fade-in flex items-start gap-3"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground/90">{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
