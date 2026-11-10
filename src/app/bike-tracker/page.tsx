import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import Divider from "@/components/Divider";
import ArticleHero from "@/sections/ArticleHero";

import { SiRaspberrypi, SiPython, SiSqlite, SiSupabase } from "react-icons/si";
import { FaLinux } from "react-icons/fa";


import Image from "next/image";

export default function TtcGtfsArticle() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="Cycletrace"
        type="Project"
        desc="By Mohamed Brahimi"
        github="https://github.com/mbrahimi25/cycletrace"
      >
        <SiRaspberrypi size={25} className="transition duration-200 hover:scale-120"/>
        <FaLinux size={25} className="transition duration-200 hover:scale-120"/>
        <SiPython size={25} className="transition duration-200 hover:scale-120"/>
        <SiSqlite size={25} className="transition duration-200 hover:scale-120"/>
        <SiSupabase size={25} className="transition duration-200 hover:scale-120"/>

      </ArticleHero>

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-12">

          {/* Section */}
          <div className="">
            <p className="mt-6 leading-8 text-white/70">
                In the summer of 2026, I began biking more, which led me to think how I could bridge my new passion for biking with my passion
                and coursework involving computer science. <br/><br/>

                After thinking about it for a while, I decided to dig up my old robotics components from years ago to figure out what worked and didn't work. <br/>
                I came up with the idea of designing my own GPS bike tracker, which could save the coordinates of the bike every second on a trip,
                and could sync with a web application when the device reconnects to the internet. <br/><br/>

                I began to brainstorm and write down ideas for my project, and compared various ways I could execute it.
                I had all the main parts I needed, and noted what I would need to buy.<br/>
                The final debate rested over the main brain behind the project: would I use an Arduino Nano (which I have) or a Raspberry Pi Zero (which I would have to purchase) ? <br/>
                After some thinking, I decided to use a Raspberry Pi. It would give me the opportunity to learn basic Linux shell scripting, connect to the a WiFi network more easily, 
                and save data to a memory card without an external module. <br/>
            </p>

            <Divider/>

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

        print("-" * 30)`}
            />

            <p className="mt-6 leading-8 text-white/70">
                I then wired up my 16x2 LCD screen to the Raspberry Pi and tested that too. <br/>
            </p>

            <Image
              src="/LCD_test1.jpg"
              alt="Sixteen by two Liquid Crystal Display Test 1"
              width={400}
              height={200}
              className="rounded-2xl"
            />

            <p className="mt-6 leading-8 text-white/70">
                I also had a push button with a large cap available, which I connected to the Pi's GPIO pins using jumper wires. <br/>
                With the testing of the GPS device, and the LCD out of the way, I can begin programming. <br/>
                For my first prototype, I simply wanted the ability to start/stop trips (using the button),
                display current trip number/status on the LCD, and save the coordinates registered by the GPS device 
                onto a local SQLite database or a CSV file. <br/>
            </p>

            <Divider/>

            <p className="mt-6 leading-8 text-white/70">
                After a lot of tweaking and testing, I managed to create a very basic prototype for the bike tracker.
                Packaged in a cardboard box, the button and the LCD display are accessible to the user. There are holes on the side for the GPS wire and a power supply. <br/>
            </p>

            <p className="mt-6 leading-8 text-white/70">
                I experimented with the Adafruit LCD Python library, and found it was much simpler than the code I currently had. <br/>
                I combined this with the GPS testing code, a local SQLite database, and functionality for the pushbutton, and finally had a working prototype for the project.<br/>
                <br/>
                At this stage, the bike tracker turns on and waits for a button to be pressed, which starts a trip. 
                An entry is placed in a SQLite table called <i>trips</i>, containing the current trip's start time and ID. 
                Every second, a new entry is placed in another SQLite table called <i>gps_points</i>. This table stores the tracker's GPS coordinates
                every second, alongside the time, speed, and the trip ID which this entry is associated with. <br/>
            </p>

            <p className="mt-6 leading-8 text-white/70">
                After the local database functionality was complete, I implemented the Supabase sync feature. 
                The Raspberry Pi checks for a WiFi connection every once in a while. If it finds one, it syncs each trip, 
                then each GPS point one-by-one, and sets each row's <i>synced</i> value to 1, so that it never resyncs, even 
                if the Pi shuts down midway. <br/>
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