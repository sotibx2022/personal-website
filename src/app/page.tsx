import ContactSection from "./componnets/ContactSection";
import HeroSection from "./componnets/HeroSection";
import PortfolioSection from "./componnets/PortfolioSection";
import Footer from "./componnets/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
