import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />
      
      <Projects />

      <Footer />

    </main>
  );
}