import { Plane, Globe, FileText, Bus, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import AppearOnScroll from "@/components/AppearOnScroll";

import voyageImg from "@/assets/travel-voyage.jpg";
import omraImg from "@/assets/travel-omra.jpg";
import visaImg from "@/assets/travel-visa.jpg";
import transportImg from "@/assets/travel-transport.jpg";
import avionImg from "@/assets/travel-avion.jpg";

const services = [
  {
    icon: Globe,
    title: "Voyages Organisés",
    description: "Des circuits touristiques sur mesure vers les plus belles destinations du monde.",
    image: voyageImg,
    type: "voyage",
  },
  {
    icon: Ticket,
    title: "Omra",
    description: "Pèlerinage organisé avec hébergement, transport et accompagnement spirituel.",
    image: omraImg,
    type: "omra",
  },
  {
    icon: FileText,
    title: "Visa",
    description: "Assistance complète pour vos demandes de visa dans tous les pays.",
    image: visaImg,
    type: "visa",
  },
  {
    icon: Bus,
    title: "Transport",
    description: "Service de transport confortable pour tous vos déplacements.",
    image: transportImg,
    type: "transport",
  },
  {
    icon: Plane,
    title: "Billets d'Avion",
    description: "Réservation de billets d'avion aux meilleurs prix garantis.",
    image: avionImg,
    type: "billet-avion",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppearOnScroll>
          <div className="text-center mb-16">
            <span className="text-[1.3rem] font-semibold text-primary uppercase tracking-widest">
              Nos Services
            </span>
            <h2 className="text-[3rem] sm:text-[4rem] font-bold text-foreground mt-3">
              Tout pour votre voyage
            </h2>
            <p className="text-[1.6rem] text-muted-foreground mt-4 max-w-2xl mx-auto">
              De la réservation de billets à l'organisation complète de votre pèlerinage,
              nous couvrons tous vos besoins de voyage.
            </p>
          </div>
        </AppearOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AppearOnScroll key={service.type} delay={index * 100}>
              <Link
                to={`/booking?type=${service.type}`}
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[1.8rem] font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[1.4rem] text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
