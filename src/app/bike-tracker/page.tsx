import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
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
                After buying and grouping together all the parts I needed, I began work on my project. <br/>
                I began with testing my VK-162 GPS module in the Raspberry Pi terminal using <i>cgps</i>. Once I got that out of the way,
                I installed the <i>python3-gps</i> library and tested the GPS by creating a sample Python script:
            </p>

            <CodeBlock
              language="python"
              code={
`import gps


session = gps.gps(mode=gps.WATCH_ENABLE | gps.WATCH_NEWSTYLE)

while True:
    report = session.next()

    if report["class"] == "TPV":
        if hasattr(report, "lat") and hasattr(report, "lon"):
            print(f"Latitude:  {report.lat}")
            print(f"Longitude: {report.lon}")

        if hasattr(report, "speed"):
            print(f"Speed:     {report.speed * 3.6:.2f} km/h")

        if hasattr(report, "alt"):
            print(f"Altitude:  {report.alt:.2f} m")

        print("-" * 30)`
            }/>

            <p className="mt-6 leading-8 text-white/70">
                I then wired up my 16x2 LCD screen to the Raspberry Pi and tested that too. <br/>
                Finally, I wired up my DS3231 Real Time Clock to the Raspberry Pi via I2C.
                This would allow my bike tracker to keep time even when the Raspberry Pi is turned off,
                and when the GPS device isn't receiving data from any GPS satellites. <br/><br/>
            </p>
            <div className = "flex gap-4">
              <Image
              src="/LCD_test1.jpg"
              alt="Sixteen by two Liquid Crystal Display Test 1"
              width={400}
              height={200}
              className="rounded-2xl"/>

              <Image
              src="/LCD_test2.jpg"
              alt="Real time clock tested with liquid crystal display"
              width={500}
              height={400}
              className="rounded-2xl"/>
            </div>

            <p className="mt-6 leading-8 text-white/70">
                I also had a push button with a large cap available, so I can wire it in and use it in my project prototype in the future. <br/>
                With the testing of the GPS device, the LCD, and the RTC module out of the way, I can begin programming. <br/>
                For my first prototype, I simply want the ability to start/stop trips (using the button),
                display the time and current trip number/status on the LCD,
                and save the coordinates registered by the GPS device onto a SQLite local database or a CSV file. <br/>
            </p>


            <br/><br/><br/>
            <h3 className="text-lg">
              This project is still in development! Check back in the near future to see any updates!
            </h3>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}