import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function LichessDashboardProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          Project
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Lichess Dashboard Project
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
          <div className="">
            <p className="mt-6 leading-8 text-white/70">
                My Lichess dashboard project is a web application which displays Lichess user information in the form of a user-friendly dashboard. <br/><br/>

                I used the Lichess API along with the Python requests library and created a web app which displays information about users of Lichess,
                a popular, open-source online chess platform. <br/><br/>

                I created the project using the Django web framework. 
            </p>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}