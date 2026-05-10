import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects"
import Footer from "@/components/Footer";

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Analytics />
      <SpeedInsights />

      <Navbar />

      <Hero />
      
      <Projects />

      <Footer />

    </main>
  );
}