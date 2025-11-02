import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="About Us"
        subtitle="Learn about our journey, expertise, and commitment to excellence in construction."
        backgroundImage="/image1.jpeg"
        height="h-96"
      />
      
      {/* About Section */}
      <AboutSection />
      
      <Footer />
    </div>
  );
}
