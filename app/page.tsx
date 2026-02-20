import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import FeaturedGallery from "./components/FeaturedGallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <FeaturedGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
