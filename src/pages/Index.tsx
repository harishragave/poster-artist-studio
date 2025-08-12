import PortfolioHeader from "@/components/PortfolioHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ThankYouSection from "@/components/ThankYouSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PortfolioHeader />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <EducationSection />
      <ContactSection />
      <ThankYouSection />
      <Footer />
    </div>
  );
};

export default Index;
