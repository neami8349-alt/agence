import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import AppearOnScroll from "@/components/AppearOnScroll";

import voyageImg from "@/assets/travel-voyage.jpg";
import omraImg from "@/assets/travel-omra.jpg";
import heroImg from "@/assets/travel-hero.jpg";

const offers = [
  {
    title: "Istanbul & Cappadoce",
    location: "Turquie",
    duration: "7 jours / 6 nuits",
    price: "À partir de 850€",
    rating: 4.8,
    image: heroImg,
    type: "voyage",
    featured: true,
  },
  {
    title: "Omra Ramadan",
    location: "Arabie Saoudite",
    duration: "10 jours / 9 nuits",
    price: "À partir de 2,200€",
    rating: 4.9,
    image: omraImg,
    type: "omra",
    featured: false,
  },
  {
    title: "Maldives Paradise",
    location: "Maldives",
    duration: "5 jours / 4 nuits",
    price: "À partir de 1,500€",
    rating: 4.7,
    image: voyageImg,
    type: "voyage",
    featured: false,
  },
];

const OffersSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppearOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
            <div>
              <span className="text-[1.3rem] font-semibold text-primary uppercase tracking-widest">
                Offres Spéciales
              </span>
              <h2 className="text-[3rem] sm:text-[4rem] font-bold text-foreground mt-3">
                Destinations populaires
              </h2>
            </div>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-primary font-semibold text-[1.5rem] hover:gap-3 transition-all"
            >
              Voir toutes les offres
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AppearOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <AppearOnScroll key={offer.title} delay={index * 150}>
              <Link
                to={`/booking?type=${offer.type}`}
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {offer.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-[1.2rem] font-bold">
                      ⭐ Populaire
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                    <span className="text-[1.2rem] text-white font-semibold">{offer.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[1.2rem] text-primary font-semibold uppercase tracking-wider">
                      {offer.location}
                    </span>
                    <span className="text-[1.2rem] text-muted-foreground">• {offer.duration}</span>
                  </div>
                  <h3 className="text-[1.8rem] font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {offer.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.6rem] font-bold text-primary">{offer.price}</span>
                    <span className="text-[1.3rem] text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      Réserver <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
