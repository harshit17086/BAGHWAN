import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomerSatisfactionSection from "../components/CustomerSatisfactionSection";

export default function ReviewsPage() {
  return (
    <div className="bg-[#faf7ed]">
      <Header />
      {/* Customer Satisfaction Section */}
      <CustomerSatisfactionSection />
      
      <Footer />
    </div>
  );
}
