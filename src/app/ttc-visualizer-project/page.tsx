import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function TtcVisualizerProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          Project
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          TTC Visualizer Project
        </h1>

        <div className="mt-8 h-px w-24 bg-white/20" />

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          By Mohamed Brahimi
        </p>
      </section>

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-12">

          {/* Section */}
          <div className="">
            <p className="mt-6 leading-8 text-white/70">
                My TTC Visualizer is an interactive map of Toronto’s TTC subway, LRT, and streetcar system.
                Includes current and under-construction lines. <br/><br/>

                I edited the official TTC map, which was in vector format, using Adobe Illustrator.
                I exported it as an SVG and was able to place the content in an HTML page,
                which I then combined with JavaScript code to make it interactive. <br/><br/>
            </p>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}