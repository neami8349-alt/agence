import Header from "@/components/TravelHeader";
import Footer from "@/components/TravelFooter";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
