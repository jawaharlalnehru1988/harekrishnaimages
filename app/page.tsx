import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import FeaturedGallery from "./components/FeaturedGallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import OtherWebsites from "./components/OtherWebsites";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans selection:bg-gold/30">
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <FeaturedGallery />
        <OtherWebsites />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
