import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";

import Image from "next/image";

export default function TtcGtfsArticle() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="Experimenting with TTC GTFS data in QGIS"
        type="Article"
        author="Mohamed Brahimi"
      />

      {/* Main Article Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="space-y-12">

          {/* Section */}
          <div className="">
            <p className="mt-6 leading-8 text-white/70">
                I've always been curious about the frequency of stops in the TTC system, and have always wondered how much of Toronto is within a 5 minute walk to a transit stop. <br/><br/>

                Answering this was simple using QGIS and TTC GTFS data. After creating a 500 meter buffer around each stop in the system, it is easy to see which parts of the city are farther than a 5 minute walk from any form of public transit. <br/><br/>

                After adding a basemap and rearranging the layers, it becomes more evident where exactly these gaps in accessibility are. <br/><br/>

                The most obvious and largest gap in the northeast of the city is Rouge National Urban Park. Several smaller gaps exist within the city grid, listed below: <br/><br/>
            </p>
            <div className="flex gap-20">
                <Image
                src="/ttc-gtfs-1.png"
                alt="TTC Image 1"
                width={500}
                height={400}
                className="rounded-2xl"/>

                <p className="mt-6 leading-8 text-white/70">
                    • The area between Finch and Sheppard, and Bayview and Leslie. <br/><br/>

                    • The area between Sheppard and Wilson, and Bathurst and Yonge <br/><br/>

                    • The area between York Mills and Lawrence, and Bayview and Leslie <br/><br/>

                    • The area above Wilson Yard and Rogers Stadium <br/><br/>
                </p>

            </div>
            <p className="mt-6 leading-8 text-white/70">
                There are many gaps similar to these.
                They seem to be in places that cannot be serviced by public transit (such as large public parks, rail yard, stadium, highway)
                or simply suburban or very high income neighbourhoods.
            </p>

            <hr className="border-white/30 my-8" />

            <p className="mt-6 leading-8 text-white/70">
                I wanted to filter this down even more, and to find out how much of the city is near 
                <strong className="text-white"> rapid</strong> transit.
                The problem of defining rapid transit arises. If it means vehicles which travel at high speeds,
                then it is easy to define Toronto's rapid transit using its 3 subway lines,
                and potentially the western portion of the Eglinton Crosstown. Toronto isn't particularly known for fast transit,
                but considering the coverage of its suburban bus network,
                I think it would be more informative to map out how much of the city has access to 
                <strong className="text-white"> frequent public transit.</strong>
            </p>

            <p className="mt-6 leading-8 text-white/70">
                There is still the issue of defining what frequent transit is, and how long it must run to be considered frequent.
            </p>

            <hr className="border-white/30 my-8" />

            <p className="mt-6 leading-8 text-white/70">
                Using SQL, it was easy to select the subway/LRT and express bus network,
                which many would qualify as having frequent enough service.
                We can already see the huge difference in service when compared to the entire network.
                On the left map, the pink lines represent express routes, while the darker red lines are the TTC's subway and LRT routes.
                On the right, we see a 500 meter buffer around these routes,
                which show which parts of the city are within 500m of a high frequency form of transit.
            </p>

            <div className="flex gap-10 my-8">
                <Image
                src="/ttc-gtfs-2.png"
                alt="TTC Image 1"
                width={500}
                height={400}
                className="rounded-2xl"/>

                <Image
                src="/ttc-gtfs-3.png"
                alt="TTC Image 3"
                width={500}
                height={400}
                className="rounded-2xl"/>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}