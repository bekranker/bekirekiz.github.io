import Header from "../components/Header";
import Hero from "../components/Hero";
import GamesSection from "../components/GamesSection";
import GameJamsSection from "../components/GameJamsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function GameDevPortfolioMain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <AboutSection />
      <GamesSection />
      <GameJamsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
