import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";

import { SiQgis, SiOpenstreetmap } from "react-icons/si";


import Image from "next/image";

export default function TtcGtfsArticle() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="Visualizing Public Transit in Algiers"
        type="Article"
        desc="By Mohamed Brahimi"
      >
        <SiQgis size={25} className="transition duration-200 hover:scale-120"/>
        <SiOpenstreetmap size={25} className="transition duration-200 hover:scale-120"/>
      </ArticleHero>

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-12">

          {/* Section */}
          <div className="">
            <p className="mt-6 leading-8 text-white/70">
                Over the past year, I've done a few projects related to public transit in the Greater Toronto Area.
                I worked with TTC GTFS data to map regions in the city which were far from any transit stop, and I've mapped
                the planned Alto HSR region overlayed with transit and population density. <br/><br/>

                Working with Canadian transit and population data thanks to the high standard of data organisation and ease of access provided by Canadian ministiries.
                Retrieving geodata from Statistics Canada, Ontario GeoHub, and the City of Toronto's Open Data Portal is simple and straightforward. <br/>

                In order to challenge myself and also to learn more about my parents' city of birth, I decided to dive into the Algiers public transit system. <br/>
            </p>

            <hr className="border-white/30 my-8" />

            <p className="mt-6 leading-8 text-white/70">
              I started off by finding a shapefile of Algeria's <i>wilayat</i>, or provinces.
              Doing so was relatively straightforward. <br/>
              In case I needed it, I also found a shapefile containing <i>daïrat</i>, or districts, which are subdivisions of provinces in Algeria. <br/>
              I also found and added a layer containing an outline of Houari Boumediene International Airport. <br/>
              I relied heavily on OpenStreetMap data for the rest of the data I used in my project.
              I used OSM data to import subway, commuter rail, tramway, and aerial tramway layers into my QGIS project,
              as well as their respective stations and data. While the data is very unorganized, I decided to focus only on the location of the point
              (for visualization) and the name:fr field, which contains the name of each station in French.
            </p>

            <Image
            src="/algiers-transit-1.png"
            alt="Algiers transit image 1"
            width={500}
            height={400}
            className="rounded-2xl mt-6"/>

            <p className="mt-6 leading-8 text-white/70">
              I am still working on this project. Check back over the next few days to see any new updates!
            </p>
            


          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}