import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";

import { SiQgis, SiOpenstreetmap, SiHtml5, SiJavascript, SiCss } from "react-icons/si";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiLogoAdobe } from "react-icons/bi";


import Image from "next/image";

export default function TtcGtfsArticle() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="Visualizing Public Transit in Algiers"
        type="Article"
        desc="By Mohamed Brahimi"
        link="https://algiers-transit.vercel.app/"
        github="https://github.com/mbrahimi25/algiers-transit"
      >
        <SiQgis size={25} className="transition duration-200 hover:scale-120"/>
        <SiOpenstreetmap size={25} className="transition duration-200 hover:scale-120"/>
        <BiLogoAdobe size={25} className="transition duration-200 hover:scale-120"/>
        <SiHtml5 size={25} className="transition duration-200 hover:scale-120"/>
        <SiJavascript size={25} className="transition duration-200 hover:scale-120"/>
        <SiCss size={25} className="transition duration-200 hover:scale-120"/>

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

                Working with Canadian transit and population data is easy thanks to the high standard of data organisation and ease of access provided by Canadian ministries.
                Retrieving geodata from Statistics Canada, Ontario GeoHub, and the City of Toronto's Open Data Portal is simple and straightforward. <br/>

                In order to challenge myself and also to learn more about my parents' city of birth, I decided to dive into the Algiers public transit system. <br/>
            </p>

            <hr className="border-white/30 my-8" />

            <p className="mt-6 leading-8 text-white/70">
              I wanted to begin by mapping Algiers' transit system in QGIS. <br/><br/>
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
            alt="Algiers public transit mapped in QGIS"
            width={500}
            height={400}
            className="rounded-2xl mt-6"/>

            <hr className="border-white/30 my-8" />

            <p className="mt-6 leading-8 text-white/70">
              After making a basic map of the Algiers region and its trams, trains, metro, and aerial tramways, 
              I realised that there was no official transit diagram combining these modes of transport into one graphic.
              Each mode of transport is operated by a different operator, so interchanges are an issue as well. <br/>
              Because of this, I decided to try my hand at designing a transit diagram for the <i>wilaya</i> of Algiers using Adobe Illustrator. <br/><br/>
              Finding a way to organize and place the lines and stations on my graphic was a challenge due to the shape of Algiers and the non-gridlike nature of its roads. <br/>
              I decided to draw the metro and tramway systems as mostly going right-left instead of drawing them as continuously curving. 
              In this sense, my diagram is slightly misleading, but the point of a transit diagram is not to be geographically accurate, 
              but rather to show how each station is accessible relative to other stations and routes. <br/><br/>
              With this in mind, I began working on my diagram using Adobe Illustrator. After some design work, this is what I ended up with:
            </p>

            <Image
            src="/algiers-transit-2.png"
            alt="Algiers public transit map, designed in Adobe Illustrator"
            width={1550}
            height={850}
            className="rounded-2xl mt-6"/>
            
            <p className="mt-6 leading-8 text-white/70">
              As you can see, the diagram is geographically inaccurate. The final stretch of the commuter rail and subway (Gare d'Alger, Place des Martyrs)
              is technically north-south, but is displayed in my map as left-right.
              I decided to design it this way as it was easier to read on a graphic and didn't waste too much space. <br/><br/>

              Overall, I was proud of the diagram I designed, especially considering the confusing maps which exist online and the lack
              of official diagrams and maps from the authorities operating the Algiers transit systems.
              My next step was to make this map interactive (like I did with my TTC diagram)
              while learning from the mistakes and limitations of my previous interactive transit map.
            </p>

            <hr className="border-white/30 my-8" />

            <p className="mt-6 leading-8 text-white/70">
              By exporting my diagram as an SVG file from Adobe Illustrator, I was able to manipulate the image as if it was an HTML file.
              I wrote a simple JSX script to rename all the station elements in the following format: <br/>
              • metro_n <br/>
              • tramway_n <br/>
              • or train_n <br/>
              so that my JavaScript program can identify which elements should be interacted with.
              I then wrote a large stations.js file with info regarding each station, and stylised the info panel with CSS. <br/>
            </p>

            <hr className="border-white/30 my-8" />

            <p className="text-white/70 flex items-center gap-2">You can check out the interactive web map repo on Github using this link: <a href="https://github.com/mbrahimi25/algiers-transit" className="text-white hover:text-blue-400" target="_blank"><FaGithub size={25}/></a> <br/> <br/> </p>
            <p className="text-white/70 flex items-center gap-2">I deployed the app on Vercel using the GitHub repo. You can check that out here: <a href="https://algiers-transit.vercel.app/" className="text-white hover:text-blue-400" target="_blank"><FaExternalLinkAlt size={25}/></a></p>


          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}