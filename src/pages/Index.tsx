import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularGamesSection } from "@/components/PopularGamesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PopularGamesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
