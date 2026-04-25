import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { TrendingDestinations } from "./components/TrendingDestinations";
import { PromoBanner } from "./components/PromoBanner";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#F8F9FA]"
      style={{
        fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Navbar />
      <main className="pb-12">
        <Hero />
        <WhyChooseUs />
        <TrendingDestinations />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
