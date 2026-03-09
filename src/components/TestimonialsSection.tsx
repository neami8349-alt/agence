import { Star, Quote } from "lucide-react";
import AppearOnScroll from "@/components/AppearOnScroll";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const testimonials = [
  {
    name: "Fatima B.",
    role: "Voyage en Turquie",
    text: "Une expérience incroyable ! L'organisation était parfaite du début à la fin. Je recommande vivement Let's Travel pour tous vos voyages.",
    rating: 5,
    avatar: avatar1,
  },
  {
    name: "Ahmed K.",
    role: "Omra 2024",
    text: "Le meilleur service Omra que j'ai jamais utilisé. Tout était prévu, hébergement de qualité et accompagnement exceptionnel.",
    rating: 5,
    avatar: avatar2,
  },
  {
    name: "Sara M.",
    role: "Visa Schengen",
    text: "Grâce à Let's Travel, j'ai obtenu mon visa en un temps record. Leur expertise et leur suivi sont remarquables.",
    rating: 5,
    avatar: avatar3,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppearOnScroll>
          <div className="text-center mb-16">
            <span className="text-[1.3rem] font-semibold text-primary uppercase tracking-widest">
              Témoignages
            </span>
            <h2 className="text-[3rem] sm:text-[4rem] font-bold text-foreground mt-3">
              Ce que disent nos clients
            </h2>
          </div>
        </AppearOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <AppearOnScroll key={t.name} delay={index * 150}>
              <div className="p-8 rounded-2xl bg-card border border-border hover-lift relative">
                <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-[1.5rem] text-foreground leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-[1.4rem] font-bold text-foreground">{t.name}</p>
                    <p className="text-[1.2rem] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
