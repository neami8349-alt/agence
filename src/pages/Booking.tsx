import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, CheckCircle } from "lucide-react";
import Header from "@/components/TravelHeader";
import Footer from "@/components/TravelFooter";
import AppearOnScroll from "@/components/AppearOnScroll";

const WHATSAPP_NUMBER = "213781455270"; // Replace with actual number

const serviceTypes = [
  { value: "voyage", label: "🌍 Voyage Organisé" },
  { value: "omra", label: "🕌 Omra" },
  { value: "visa", label: "📋 Visa" },
  { value: "transport", label: "🚌 Transport" },
  { value: "billet-avion", label: "✈️ Billet d'Avion" },
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "voyage";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: initialType,
    destination: "",
    date: "",
    passengers: "1",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!navigator.onLine) {
      setError("Vous êtes hors ligne. Vérifiez votre connexion internet et réessayez.");
      return;
    }

    const serviceLabel = serviceTypes.find((s) => s.value === form.type)?.label || form.type;

    const message = `🌟 *Nouvelle Demande - Let's Travel*

📋 *Type:* ${serviceLabel}
👤 *Nom:* ${form.name}
📱 *Téléphone:* ${form.phone}
📧 *Email:* ${form.email}
📍 *Destination:* ${form.destination}
📅 *Date:* ${form.date}
👥 *Passagers:* ${form.passengers}
💬 *Message:* ${form.message}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    const newWindow = window.open(waUrl, "_blank");
    if (newWindow) {
      setSent(true);
    } else {
      // popup blocked or failed to open
      setError("Impossible d'ouvrir WhatsApp. Veuillez autoriser les pop-ups ou réessayer.");
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24 flex items-center justify-center">
          <AppearOnScroll>
            <div className="text-center max-w-md mx-auto px-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-[3rem] font-bold text-foreground mb-4">Demande envoyée !</h1>
              <p className="text-[1.6rem] text-muted-foreground mb-8">
                Votre demande a été ouverte dans WhatsApp. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <button
                onClick={() => setSent(false)}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-[1.5rem] font-semibold"
              >
                Nouvelle demande
              </button>
            </div>
          </AppearOnScroll>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AppearOnScroll>
            <div className="text-center mb-12">
              <span className="text-[1.3rem] font-semibold text-primary uppercase tracking-widest">
                Réservation
              </span>
              <h1 className="text-[3rem] sm:text-[4rem] font-bold text-foreground mt-3">
                Faites votre demande
              </h1>
              <p className="text-[1.6rem] text-muted-foreground mt-4">
                Remplissez le formulaire ci-dessous et recevez une réponse rapide via WhatsApp.
              </p>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-8 sm:p-10 space-y-6"
            >
              {/* Service Type */}
              <div>
                <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                  Type de service *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceTypes.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, type: s.value }))}
                      className={`px-4 py-3 rounded-xl text-[1.3rem] font-medium border transition-all ${
                        form.type === s.value
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="+213 XX XX XX XX"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Destination & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="Ex: Istanbul, Mecque..."
                  />
                </div>
                <div>
                  <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                  Nombre de passagers
                </label>
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "passager" : "passagers"}
                    </option>
                  ))}
                  <option value="10+">10+ passagers</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[1.4rem] font-semibold text-foreground mb-2">
                  Message / Détails
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Précisez vos besoins..."
                />
              </div>

              {/* Submit */}
              {error && (
                <p className="text-[1.2rem] text-red-500 text-center">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl text-[1.6rem] font-bold hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
                Envoyer via WhatsApp
              </button>

              <p className="text-[1.2rem] text-muted-foreground text-center">
                En cliquant, vous serez redirigé vers WhatsApp pour envoyer votre demande.
              </p>
            </form>
          </AppearOnScroll>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
