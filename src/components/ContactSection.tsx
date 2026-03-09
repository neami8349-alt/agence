import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import AppearOnScroll from "@/components/AppearOnScroll";

const WHATSAPP_NUMBER = "213XXXXXXXXX"; // Replace with actual number

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppearOnScroll>
          <div className="text-center mb-16">
            <span className="text-[1.3rem] font-semibold text-primary uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-[3rem] sm:text-[4rem] font-bold text-foreground mt-3">
              Contactez-nous
            </h2>
            <p className="text-[1.6rem] text-muted-foreground mt-4 max-w-xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
          </div>
        </AppearOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              title: "Téléphone",
              info: "+213 XX XX XX XX",
              href: "tel:+213XXXXXXXXXX",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              info: "Écrivez-nous",
              href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite avoir des informations.")}`,
            },
            {
              icon: Mail,
              title: "Email",
              info: "contact@letstravel.com",
              href: "mailto:contact@letstravel.com",
            },
            {
              icon: MapPin,
              title: "Adresse",
              info: "Alger, Algérie",
              href: "#",
            },
          ].map((item, index) => (
            <AppearOnScroll key={item.title} delay={index * 100}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[1.6rem] font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-[1.4rem] text-muted-foreground">{item.info}</p>
              </a>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
