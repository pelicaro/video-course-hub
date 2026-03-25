import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <BookOpen className="w-5 h-5 text-primary" />
          <span className="text-gradient-gold">MeuCurso</span>
        </Link>
        <a
          href="#aulas"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Aulas
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
