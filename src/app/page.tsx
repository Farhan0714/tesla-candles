import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Features from "@/components/Features";
import Collection from "@/components/Collection";
import Testimonials from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      <Hero />
      <OurStory />
      <Features />
      <Collection />
      <Testimonials />
      <Subscribe />
      <CTA />
      <Footer />
    </main>
  );
}
