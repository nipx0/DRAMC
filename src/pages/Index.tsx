import HeroSection from "@/components/HeroSection";
import DualServices from "@/components/DualServices";
import PortfolioSection from "@/components/PortfolioSection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import StickyNav from "@/components/StickyNav";
import ScrollProgress from "@/components/ScrollProgress";
import LinktreeSection from "@/components/LinktreeSection";
import PaymentPartners from "@/components/PaymentPartners";
import ReviewsScroll from "@/components/ReviewsScroll";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <StickyNav />
      <HeroSection />
      <DualServices />
      <PaymentPartners />
      <TrustBar />
      <ReviewsScroll />
      <LinktreeSection />
      <Footer />
      <FloatingCallButton />
    </main>
  );
};

export default Index;
