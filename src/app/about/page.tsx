"use client";

import Navbar from "@/components/Navbar";
import ArticleHero from "@/sections/ArticleHero";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

import { IoMdDownload } from "react-icons/io";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>

      {/* Hero */}

        <ArticleHero
          title="Student and software developer."
          type="About Me"
          desc="My name is Mohamed Brahimi. I'm a computer science student at the University of Toronto.
            I am a programmer with interests in web development,
            data-driven applications, geographic information systems, and software engineering.
            I enjoy building projects that combine clean design, data analysis, strong functionality, and good user experience."
          github="https://github.com/mbrahimi25/"
          linkedin="https://www.linkedin.com/in/mohbrahimi/"
          />
      

      {/* Info Grid */}
      <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-24 md:grid-cols-2">

        {/* Background */}
        <motion.div
        initial={{ opacity: 0, x: -50}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 2 }}>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">
              Background
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              I grew up and currently live in Toronto, and fell in love with programming at a young age thanks to my father,
              who's a software developer. I grew to love building software and hardware projects, and while I went through many
              "phases" with my interests, the joy of having a finished project was always the same. Over the last decade, I've built
              projects incorporating robotics, game development, web and mobile development, and data analysis skills.
            </p>
          </div>

        </motion.div>

        {/* Interests */}
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">
              Interests
            </h2>

            <ul className="mt-4 space-y-3 text-white/70">
              <li>• Software Engineering</li>
              <li>• Web Development</li>
              <li>• Data Analysis and Visualization</li>
              <li>• Sports Analytics</li>
              <li>• Geographic Information Systems</li>
            </ul>
          </div>

        </motion.div>

      </section>
      
      <section className="mx-auto max-w-5xl px-6 pb-24 space-y-5">
        
        <a
          href="/Mohamed_Brahimi_CS_Resume.pdf"
          download
          className="rounded-xl flex justify-center gap-4 bg-white px-6 py-3 font-medium text-black transition hover:opacity-80">
            Download Resume <IoMdDownload size={25}/>
        </a>

        <iframe src="/Mohamed_Brahimi_CS_Resume.pdf" width="100%" height="600px"></iframe>

      </section>

      </motion.div>

      <Footer />
    </main>
  );
}