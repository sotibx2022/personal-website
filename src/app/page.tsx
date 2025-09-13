import ContactSection from "./componnets/ContactSection";
import HeroSection from "./componnets/HeroSection";
import PortfolioSection from "./componnets/PortfolioSection";
import QueryClientProvider from "./providers/QueryClientProvider";
export default function Home() {
  return (
    <>
        <HeroSection />
        <PortfolioSection />
        <ContactSection />
    </>
  );
}
