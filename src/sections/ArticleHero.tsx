"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaGitlab, FaExternalLinkAlt } from "react-icons/fa";
import { SiPypi, SiArcgis } from "react-icons/si"

type ArticleHeroProps = {
  title: string;
  type: string;
  author: string;
  link?: string;
  github?: string;
  gitlab?: string;
  pypi?: string;
  arcgis?: string;
};

export default function ArticleHero({
  title,
  type,
  author,
  link,
  github,
  gitlab,
  pypi,
  arcgis,
}: ArticleHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>

    {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          {type}
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          {title}
        </h1>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}>
          <div className="mt-8 flex gap-4">
            {link && (
              <a href={link} className="transition duration-200 hover:scale-120" target="_blank">
                <FaExternalLinkAlt size={25}/>
              </a>)}

            {github && (
              <a href={github} className="transition duration-200 hover:scale-120" target="_blank">
                <FaGithub size={25} />
              </a>)}
            
            {gitlab && (
              <a href={gitlab} className="transition duration-200 hover:scale-120" target="_blank">
                <FaGitlab size={25} />
              </a>)}
            {pypi && (
              <a href={pypi} className="transition duration-200 hover:scale-120" target="_blank">
                <SiPypi size={25} />
              </a>)}
            {arcgis && (
              <a href={arcgis} className="transition duration-200 hover:scale-120" target="_blank">
                <SiArcgis size={25} />
              </a>)}
          </div>
        </motion.div>
        <div className="mt-8 h-px w-24 bg-white/20" />

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          By {author}
        </p>
      </section>
    
    </motion.div>
  );
}