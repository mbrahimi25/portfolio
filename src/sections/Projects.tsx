"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>

    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Spotlight
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <ProjectCard
            title="Cycletrace"
            description="A GPS Bike Tracker powered by a Raspberry Pi Zero W"
            tech="Raspberry Pi • Python • SQLite • Supabase • React • Vite"
            article="/bike-tracker"
            github="https://github.com/mbrahimi25/cycletrace"
          />

          <ProjectCard
            title="FBRef Stats"
            description="Python library for scraping soccer statistics from FBRef."
            tech="Python • Requests • BeautifulSoup4"
            article="/fbref-stats"
            github="https://github.com/mbrahimi25/fbrefstats"
            pypi="https://pypi.org/project/fbrefstats/"
          />

          <ProjectCard
            title="Atlas"
            description="A global information center for investors, journalists, and the public. 
            Built with a team of 3 at Hack the Valley 11"
            tech="TypeScript • Mapbox GL JS • Codex CLI"
            github="https://github.com/ZayaanB/Atlas-HTV"
            devpost="https://devpost.com/software/atlas-ivntjm"
          />

          <ProjectCard
            title="TOQuery"
            description="A geospatial REST API for Toronto data."
            tech="Python • FastAPI • PostgreSQL • PostGIS"
            github="https://github.com/mbrahimi25/toquery"
          />

          <ProjectCard
            title="Algiers Transit Visualization"
            description="Interactive transit diagram and GIS map of public transit in Algiers, Algeria."
            tech="QGIS • OpenStreetMap • Adobe Illustrator • HTML/CSS/JS • Vercel"
            article="/algiers-transit"
            link="https://algiers-transit.vercel.app"
            github="https://github.com/mbrahimi25/algiers-transit"
          />

          

        </div>
      </section>
    </motion.div>
  );
}