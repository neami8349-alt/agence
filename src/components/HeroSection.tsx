import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/travel-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-[1.3rem] text-white/90 font-medium">
              Voyagez avec confiance
            </span>
          </div>

          <h1
            className="text-[4rem] sm:text-[5.5rem] lg:text-[7rem] font-bold text-white leading-[1.1] mb-6 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            Explorez le
            <br />
            <span className="text-primary">monde</span> avec nous
          </h1>

          <p
            className="text-[1.6rem] sm:text-[1.8rem] text-white/80 mb-10 max-w-lg leading-relaxed opacity-0 animate-fadeInUp"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            Voyages organisés, Omra, visas, billets d'avion et transport — votre
            aventure commence ici.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
          >
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-[1.6rem] font-semibold hover:opacity-90 transition-all hover:gap-3"
            >
              Réserver maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full text-[1.6rem] font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Nos services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
