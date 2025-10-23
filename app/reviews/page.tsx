import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomerSatisfactionSection from "../components/CustomerSatisfactionSection";

export default function ReviewsPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />
      
      {/* Hero Section for Reviews Page */}
      <section className="relative bg-[#faf7ed] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#2F3D24] mb-6">
              Customer Reviews & Certifications
            </h1>
            <p className="text-lg md:text-xl text-[#6B7555] leading-relaxed">
              Discover why our clients trust us with their most important projects. 
              Explore our industry certifications, customer testimonials, and project documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <CustomerSatisfactionSection />
      
      <Footer />
    </div>
  );
}
