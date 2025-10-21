import Header from "./components/Header";
import Hero from "./components/Hero";
import WorksSection from "./components/WorksSection";
import CountrySection from "./components/CountrySection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WorksSection />
      <CountrySection />
      <StatsSection />
      {/* Add more sections below as needed */}
    </div>
  );
}
