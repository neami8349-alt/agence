import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";

const TravelHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/booking", label: "Réserver" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-[2rem] font-bold text-foreground tracking-tight">
              Let's Travel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[1.5rem] font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-[1.4rem] font-semibold hover:opacity-90 transition-opacity"
            >
              Réserver maintenant
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[1.8rem] font-medium py-2 ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-[1.6rem] font-semibold text-center"
            >
              Réserver maintenant
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TravelHeader;
