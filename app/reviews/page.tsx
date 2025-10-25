import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CustomerSatisfactionSection from "../components/CustomerSatisfactionSection";

export default function ReviewsPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="Customer Reviews"
        subtitle="See what our satisfied clients have to say about our construction services and expertise."
        backgroundImage="/image1.jpeg"
        height="h-96"
      />
      
      {/* Customer Satisfaction Section */}
      <CustomerSatisfactionSection />
      
      <Footer />
    </div>
  );
}
