import Hero from "./components/Hero";
import WorksSection from "./components/WorksSection";
import CountrySection from "./components/CountrySection";
import StandardsSection from "./components/StandardsSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <WorksSection />
      <CountrySection />
      <StandardsSection />
      <StatsSection />
    </div>
  );
}
