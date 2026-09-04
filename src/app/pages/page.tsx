"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import { motion } from "framer-motion";

const articles = [
  {
    slug: "bike-tracker",
    title: "Bike Tracker",
    description: "How I'm building a GPS bike tracker using a Raspberry Pi and Python.",
  },
  {
    slug: "algiers-transit",
    title: "Visualizing Public Transit in Algiers",
    description: "Collecting, organising, and displaying data related to the public transit system in Algiers province, Algeria.",
  },
  {
    slug: "lichess-dashboard-project",
    title: "Lichess Dashboard Project",
    description: "Web application created using Django which displays Lichess user information in a user-friendly dashboard format.",
  },
  {
    slug: "ttc-visualizer-project",
    title: "TTC Visualizer Project",
    description: "Interactive map of Toronto’s TTC subway, LRT, and streetcar system. Includes current and under-construction lines ",
  },
  {
    slug: "experimenting-ttc-gtfs",
    title: "Experimenting with TTC GTFS Data in QGIS",
    description: "Using Toronto Transit Commision GTFS data provided by the City of Toronto to answer some questions and visualize some things I've always been curious about.",
  },
  {
    slug: "housing-density-analysis",
    title: "Neighbourhood Housing Density Analysis",
    description: "Collecting and mapping data on QGIS to analyse housing density in a Toronto dissemination area.",
  },
  {
    slug: "fbref-stats",
    title: "FBRef Stats",
    description: "Soccer statistics web scraper made using Python with BeautifulSoup4 and requests",
  },
];

export default function PagesIndex() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}>

        {/* Hero-style header */}
        <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Pages & Articles
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Notes, thoughts, and technical write-ups.
          </p>

          <div className="mt-6 h-px w-24 bg-white/20" />
        </section>

        {/* Articles */}
        <section className="mx-auto w-fit px-6 pb-24">
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}>

            <div className="space-y-6">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="block rounded-xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
                >
                  <h2 className="text-2xl font-bold">
                    {a.title}
                  </h2>

                  <p className="mt-2 text-white/60">
                    {a.description}
                  </p>
                </Link>
              ))}
            </div>

          </motion.div>
        </section>

      </motion.div>

      <Footer />
    </main>
  );
}