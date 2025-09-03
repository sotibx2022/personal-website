import ContactSection from "./componnets/ContactSection";
import HeroSection from "./componnets/HeroSection";
import PortfolioSection from "./componnets/PortfolioSection";
import AboutDeveloper from "./componnets/AboutDeveloper";
import Footer from "./componnets/Footer";
import Header from "./componnets/Header";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutDeveloper />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}
