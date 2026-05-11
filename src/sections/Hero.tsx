"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>

    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-widest text-white/60">
        Developer Portfolio
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        Building modern applications.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-white/70">
        I create responsive websites, software, and maps
        using modern technologies.
      </p>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="flex gap-4">
        <div className="mt-8 flex gap-4">
          <a
            href="/about"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10">
            About
          </a>

          <a
            href="/pages"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10">
            Pages
          </a>

          <a
            href="mailto:momohb2007@gmail.com"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10">
            Contact Me
          </a>

          <a
            href="#projects"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-80">
            View Projects
          </a>
          
        </div>
      </motion.div>

      <div className="mt-8 flex gap-4">
          <a href="https://www.linkedin.com/in/mohbrahimi/" className="transition duration-200 hover:scale-120" target="_blank">
            <FaLinkedin size={25}/>
          </a>
          <a href="https://github.com/mbrahimi25/" className="transition duration-200 hover:scale-120" target="_blank">
            <FaGithub size={25} />
          </a>
          <a href="https://gitlab.com/mbrahimi25/" className="transition duration-200 hover:scale-120" target="_blank">
            <FaGitlab size={25} />
          </a>
      </div>
      
      <div className="mx-auto my-6 h-px w-40 bg-white/20" />  

    </section>
    </motion.div>
  );
}