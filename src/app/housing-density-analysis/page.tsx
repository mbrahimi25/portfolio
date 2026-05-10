import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { SiArcgis } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";

import Image from "next/image";

export default function HousingDensityProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          Project
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Housing Density Analysis
        </h1>

        <div className="mt-8 h-px w-24 bg-white/20" />

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          By Mohamed Brahimi
        </p>
      </section>

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-12">

          {/* Section */}
            <p className="mt-6 leading-8 text-white/70">
                While taking an introductory geographic information systems course in university, we were tasked with mapping a Canadian dissemination area using QGIS, creating our own data for important locations within the area,
                and using our findings to analyse whether housing density in the neighbourhood can be considered uniform. <br/><br/>

                I mapped my findings using ArcGIS Online as well, in order to make the map interactive.
                I included images and descriptions of my data points. <br/><br/>
            </p>

            <p className="text-white/70 flex items-center gap-2">The online map can be found here: <a href="https://arcg.is/GTn9X" className="text-white hover:text-blue-400"><SiArcgis size={25}/></a></p>

            <div className="flex gap-20">
              <Image
              src="/housing-density-1.png"
              alt="Print layout of Toronto Dissemination Area 35204030 with Documented Locations"
              width={750}
              height={600}
              className="rounded-2xl"/>

              <p className="mt-6 leading-8 text-white/70">
                I chose dissemination area 35204030, an area within the City of Toronto which is bordered to the north by Van Horne Ave,
                to the south by Pleasant View Dr, to the east by Brian Dr, and to the west by Victoria Park Ave. <br/><br/>

                By using a print layout in QGIS, I was able to create a legible map with a legend,
                labels, and a scale to show locations which would be important for my analysis.
                I split my data into 3 categories: <br/>
                • Land use evidence <br/>
                • Housing evidence <br/>
                • Travel/Transit evidence <br/>
              </p>

            </div>

            <hr className="border-white/30 my-8" />

            <p className="text-white/70 flex items-center gap-2">My analysis and conclusion which was submitted as part of this analysis can be found below:</p>

            <a
            href="/Mohamed_Brahimi_Housing_Density_Analysis.pdf"
            download
            className="rounded-xl flex justify-center gap-4 bg-white px-6 py-3 font-medium text-black transition hover:opacity-80">
            Download Analysis <IoMdDownload size={25}/>
            </a>
            
        </div>
      </section>

      <Footer />
    </main>
  );
}