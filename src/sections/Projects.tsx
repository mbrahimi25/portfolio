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
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <ProjectCard
            title="Raspberry Pi Bike Tracker"
            description="A GPS Bike Tracker powered by a Raspberry Pi Zero W"
            tech="Raspberry Pi • Python • SQLite"
            article="/bike-tracker"
          />

          <ProjectCard
            title="Algiers Transit Visualization"
            description="Interactive transit diagram and GIS map of public transit in Algiers, Algeria."
            tech="QGIS • OpenStreetMap • Adobe Illustrator • HTML/CSS/JS • Vercel"
            article="/algiers-transit"
            link="https://algiers-transit.vercel.app"
            github="https://github.com/mbrahimi25/algiers-transit"
          />

          <ProjectCard
            title="Lichess Dashboard"
            description="Web application created using Django which displays Lichess user information in a user-friendly dashboard format."
            tech="Python • Django • Requests • Lichess API • Vercel"
            article="/lichess-dashboard-project"
            link="https://lichess-dashboard.vercel.app"
            github="https://github.com/mbrahimi25/lichess-dashboard"
            gitlab="https://gitlab.com/mbrahimi25/lichess-dashboard"
          />

          <ProjectCard
            title="TTC Visualizer"
            description="Interactive map of Toronto’s TTC subway, LRT, and streetcar system. Includes current and under-construction lines."
            tech="HTML • JavaScript • Adobe Illustrator • Vercel"
            link="https://visualize-ttc.vercel.app/"
            article="/ttc-visualizer-project"
            github="https://github.com/mbrahimi25/visualize-ttc"
            gitlab="https://gitlab.com/mbrahimi25/visualize-ttc"
          />

          <ProjectCard
            title="FBRef Stats"
            description="Python library for scraping soccer statistics from FBRef."
            tech="Python • Requests • BeautifulSoup4"
            article="/fbref-stats"
            github="https://github.com/mbrahimi25/fbrefstats"
            pypi="https://pypi.org/project/fbrefstats/"
          />

        </div>
      </section>
    </motion.div>
  );
}