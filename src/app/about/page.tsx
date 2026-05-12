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
          gitlab="https://gitlab.com/mbrahimi25/"
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
              I have experience working with Python, Django,
              JavaScript, and modern frontend technologies.
              I enjoy creating full-stack applications,
              dashboards, and interactive web tools.
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
              <li>• Web Development</li>
              <li>• UI / UX Design</li>
              <li>• Data Visualization</li>
              <li>• Software Engineering</li>
              <li>• Sports Analytics</li>
              <li>• Geographic Information Systems</li>
            </ul>
          </div>

        </motion.div>

      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {[
            "Python",
            "C",
            "HTML/CSS/JS",
            "Unity C#",
            "Django",
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Git",
            "PostgreSQL",
            "QGIS",
            "ArcGIS Suite",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70"
            >
              {tech}
            </div>
          ))}
        </div>
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