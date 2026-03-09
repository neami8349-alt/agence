import { Link } from "react-router-dom";
import { Plane, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const TravelFooter = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-[1.8rem] font-bold">Let's Travel</span>
            </Link>
            <p className="text-[1.4rem] opacity-70 leading-relaxed">
              Votre partenaire de confiance pour tous vos voyages et services de mobilité.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[1.4rem] font-bold uppercase tracking-wider mb-4 opacity-60">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Accueil</Link>
              <Link to="/booking" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Réserver</Link>
              <Link to="/contact" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[1.4rem] font-bold uppercase tracking-wider mb-4 opacity-60">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/booking?type=voyage" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Voyages</Link>
              <Link to="/booking?type=omra" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Omra</Link>
              <Link to="/booking?type=visa" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Visa</Link>
              <Link to="/booking?type=billet-avion" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Billets d'avion</Link>
              <Link to="/booking?type=transport" className="text-[1.4rem] opacity-70 hover:opacity-100 transition-opacity">Transport</Link>
            </nav>
          </div>

          {/* Social & Theme */}
          <div>
            <h4 className="text-[1.4rem] font-bold uppercase tracking-wider mb-4 opacity-60">
              Suivez-nous
            </h4>
            <div className="flex gap-3 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/213XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-4">
              {(["light", "dark", "system"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`text-[1.3rem] capitalize transition-opacity ${
                    theme === t ? "opacity-100 underline underline-offset-4" : "opacity-50"
                  }`}
                >
                  {t === "system" ? "Auto" : t === "light" ? "Clair" : "Sombre"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-[1.3rem] opacity-50">
            © 2025 Let's Travel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TravelFooter;
