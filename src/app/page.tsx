import ContactSection from "./componnets/ContactSection";
import HeroSection from "./componnets/HeroSection";
import PortfolioSection from "./componnets/PortfolioSection";
import AboutDeveloper from "./componnets/AboutDeveloper";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutDeveloper />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
