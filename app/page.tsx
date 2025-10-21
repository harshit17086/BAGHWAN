import Header from "./components/Header";
import Hero from "./components/Hero";
import WorksSection from "./components/WorksSection";
import CountrySection from "./components/CountrySection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WorksSection />
      <CountrySection />
      {/* Add more sections below as needed */}
    </div>
  );
}
