import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";
import GithubReadme from "@/components/GithubReadme";

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
      
              <p className="space-y-12 mt-6 leading-8 text-white/70">
                Below is the GitHub README.md file for this project: <br/><br/>
              </p>
      
              <GithubReadme githubUsername="mbrahimi25" repoName="visualize-ttc"></GithubReadme>
      
            </section>

      <Footer />
    </main>
  );
}