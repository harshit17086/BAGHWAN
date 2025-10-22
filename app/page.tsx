import Hero from "./components/Hero";
import WorksSection from "./components/WorksSection";
import CountrySection from "./components/CountrySection";
import StandardsSection from "./components/StandardsSection";
import StatsSection from "./components/StatsSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WorksSection />
      <CountrySection />
      <StandardsSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
