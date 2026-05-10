import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { IoMdDownload } from "react-icons/io";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          About Me
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-5xl">
          Student and software developer.
        </h2>

        <div className="mt-8 h-px w-24 bg-white/20" />

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          My name is Mohamed Brahimi. I'm a computer science student at the University of Toronto. <br/>
          I am a programmer with interests in web development,
          data-driven applications, geographic information systems, and software engineering. <br/>
          I enjoy building projects that combine clean design, data analysis, strong functionality, and good user experience.
        </p>
      </section>

      {/* Info Grid */}
      <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-24 md:grid-cols-2">

        {/* Background */}
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

        {/* Interests */}
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
          </ul>
        </div>

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
      
      <section className="mx-auto max-w-5xl px-6 pb-24">
        
          <a
          href="/Mohamed_Brahimi_CS_Resume.pdf"
          download
          className="rounded-xl flex justify-center gap-4 bg-white px-6 py-3 font-medium text-black transition hover:opacity-80">
            Download Resume <IoMdDownload size={25}/>
          </a>

      </section>

      

      <Footer />
    </main>
  );
}