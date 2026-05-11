import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";

import Image from "next/image";

export default function TtcVisualizerProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="TTC Visualizer Project"
        type="Project"
        author="Mohamed Brahimi"
        link="https://visualize-ttc.vercel.app/"
        github="https://github.com/mbrahimi25/visualize-ttc"
      />

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