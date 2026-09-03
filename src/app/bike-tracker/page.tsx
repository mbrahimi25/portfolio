import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";

import { SiRaspberrypi, SiPython, SiSqlite, SiQgis } from "react-icons/si";
import { FaLinux } from "react-icons/fa";


import Image from "next/image";

export default function TtcGtfsArticle() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="Raspberry Pi Bike Tracker"
        type="Project"
        desc="By Mohamed Brahimi"
      >
        <SiRaspberrypi size={25} className="transition duration-200 hover:scale-120"/>
        <FaLinux size={25} className="transition duration-200 hover:scale-120"/>
        <SiPython size={25} className="transition duration-200 hover:scale-120"/>
        <SiSqlite size={25} className="transition duration-200 hover:scale-120"/>
        <SiQgis size={25} className="transition duration-200 hover:scale-120"/>

      </ArticleHero>

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-12">

          {/* Section */}
          <div className="">
            <p className="mt-6 leading-8 text-white/70">
                In the summer of 2026, I begean biking more, which led me to think how I could bridge my new passion for biking with my passion
                and coursework involving computer science. <br/><br/>

                After thinking about it for a while, I decided to dig up my old robotics components from years ago to figure out what worked and didn't work. <br/>
                I came up with the idea of designing my own GPS bike tracker, which could save the coordinates of the bike every second on a trip,
                and could sync with a web application when the device reconnects to the internet. <br/><br/>

                I began to brainstorm and write down ideas for my project, and compared various ways I could execute it.
                I had all the main parts I needed, and noted what I would need to buy.<br/>
                The final debate rested over the main brain behind the project: would I use an Arduino Nano (which I have) or a Raspberry Pi Zero (which I would have to purchase)<br/>
                After some thinking, I decided to use a Raspberry Pi. It would give me the opportunity to learn Linux more deeply, connect to the internet and a server more simply, and save data to a memory card without an external module. <br/><br/>
            </p>

            <hr className="border-white/30 my-8" />

            <p className="mt-6 leading-8 text-white/70">
            
            </p>

            

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}