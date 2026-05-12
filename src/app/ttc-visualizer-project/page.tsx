import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";

import { SiHtml5, SiCss, SiJavascript } from "react-icons/si";
import { TbBrandAdobeIllustrator } from "react-icons/tb";

import Image from "next/image";

export default function TtcVisualizerProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="TTC Visualizer Project"
        type="Project"
        desc="By Mohamed Brahimi"
        link="https://visualize-ttc.vercel.app/"
        github="https://github.com/mbrahimi25/visualize-ttc"
      >
        <SiHtml5 size={25} className="transition duration-200 hover:scale-120"/>
        <SiCss size={25} className="transition duration-200 hover:scale-120"/>
        <SiJavascript size={25} className="transition duration-200 hover:scale-120"/>
        <TbBrandAdobeIllustrator size={25} className="transition duration-200 hover:scale-120"/>
        
      </ArticleHero>

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="space-y-12"> {/* Divider */}

          {/* Section */}
          <div className="space-y-10">
            <p className="mt-6 leading-8 text-white/70">
                An interactive map of Toronto’s TTC subway and streetcar network, extended to include under-construction and proposed lines.
            </p>
                
            <h3 className="text-3xl font-bold">Overview</h3>
            <p className="mt-6 leading-8 text-white/70">
                This project enhances the official TTC map by incorporating future transit expansions into a single, unified visualization. <br/>
                It combines graphic design and frontend development to create a more informative and engaging transit tool.
            </p>

            <h3 className="text-3xl font-bold">Features</h3>
            <ul className="mt-6 space-y-3 text-white/70">
                <li>• Includes subway, LRT, and streetcar lines</li>
                <li>• Adds under-construction routes (YNSE, Eglinton Crosstown West, Ontario Line, Scarborough Subway Extension)</li>
                <li>• Clickable stations with interactive information display</li>
                <li>• Clean, consistent design based on the original TTC map</li>
            </ul>

            <h3 className="text-3xl font-bold">Tech Stack</h3>
            <ul className="mt-6 space-y-3 text-white/70">
                <li>• Adobe Illustrator – for editing and extending the base map</li>
                <li>• JavaScript – for interactivity and station data display</li>
                <li>• HTML/CSS – for structure and styling</li>
            </ul>

            <h3 className="text-3xl font-bold">How It Works</h3>
            <p className="mt-6 leading-8 text-white/70">
              The original TTC map was modified in Adobe Illustrator to include additional transit lines while preserving its visual style.
              The map was then integrated into a web interface where JavaScript enables users to click on stations and view relevant information.
            </p>

            <h3 className="text-3xl font-bold">How To Use</h3>
            <p className="mt-6 leading-8 text-white/70">
              The project runs from the index.html file.
              The map.svg file is fetched and placed in the index.html file using JavaScript.
              From the index file, it is possible to hover and click on different stations. <br/>
              To view the project locally, download the repo.
              Because the SVG is placed in the HTML file using fetch(), browsers will block the fetch call,
              making the project invisible. Running from a local server,
              or even opening the index.html file in VS Code and viewing it from there will work. <br/>
              You can also view the project non-locally, as it is hosted on Vercel.
            </p>

            <h3 className="text-3xl font-bold">What's Next</h3>
            <ul className="mt-6 space-y-3 text-white/70">
                <li>• Finish adding station data and information</li>
                <li>• Show each station's connection options to different subway, LRT, streetcar, and bus routes, as well as routes from other transit providers</li>
            </ul>
            
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}