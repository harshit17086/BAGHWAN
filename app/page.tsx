import AboutSection from "./components/AboutSection";
import RoomsSection from "./components/RoomsSection";
import MapSection from "./components/MapSection";
import Hero from "./components/Hero";
import WorksSection from "./components/WorksSection";
import CountrySection from "./components/CountrySection";
import StandardsSection from "./components/StandardsSection";
import ParallaxSection from "./components/ParallaxSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsSection from "./components/StatsSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <CountrySection />
      <StandardsSection />
      <ParallaxSection />
      <RoomsSection />
      <MapSection />
      <TestimonialsSection />
     
      <Footer />
    </div>
  );
}
