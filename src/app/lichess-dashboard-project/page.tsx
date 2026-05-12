import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleHero from "@/sections/ArticleHero";

import Image from "next/image";

export default function LichessDashboardProjectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <ArticleHero
        title="Lichess Dashboard"
        type="Project"
        desc="By Mohamed Brahimi"
        link="https://lichess-dashboard.vercel.app/"
        github="https://github.com/mbrahimi25/lichess-dashboard"
        gitlab="https://gitlab.com/mbrahimi25/lichess-dashboard"
      />

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