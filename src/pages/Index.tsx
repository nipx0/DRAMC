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
import InstagramFeed from "@/components/InstagramFeed";
import PhotoShowcase from "@/components/PhotoShowcase";
import TestShowcase from "@/components/TestShowcase";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <StickyNav />
      <HeroSection />
      <TestShowcase />
      <DualServices />
      <PaymentPartners />
      <TrustBar />
      <ReviewsScroll />
      <LinktreeSection />
      <InstagramFeed />
      <PhotoShowcase />
      <Footer />
      <FloatingCallButton />
    </main>
  );
};

export default Index;
