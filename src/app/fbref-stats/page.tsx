import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";
import GithubReadme from "@/components/GithubReadme";

import Image from "next/image";
import { SiPython, SiPypi } from "react-icons/si";

export default function FbrefstatsProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="FBRef Stats"
        type="Project"
        desc="By Mohamed Brahimi"
        github="https://github.com/mbrahimi25/fbrefstats"
        pypi="https://pypi.org/project/fbrefstats/"
        >
        <SiPython size={25} className="transition duration-200 hover:scale-120"/>

      </ArticleHero>

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <p className="space-y-12 mt-6 leading-8 text-white/70">
          Below is the GitHub README.md file for this project: <br/><br/>
        </p>

        <GithubReadme githubUsername="mbrahimi25" repoName="fbrefstats"></GithubReadme>

      </section>

      <Footer />
    </main>
  );
}