import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card/50 border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-foreground/70 flex items-center justify-center gap-2">
          © 2025 Hasindu Liyanage. Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using React and advanced CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
