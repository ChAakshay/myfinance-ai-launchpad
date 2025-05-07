
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyUsSection from "@/components/WhyUsSection";
import DemoSection from "@/components/DemoSection";
import FAQSection from "@/components/FAQSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-white to-financeBlue/5 min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyUsSection />
      <DemoSection />
      <FAQSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
