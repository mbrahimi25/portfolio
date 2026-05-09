import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Lichess Dashboard"
            description="Web application created using Django which displays Lichess user information in a user-friendly dashboard format."
            tech="Python • Django • Requests • Lichess API • Vercel"
            link="https://lichess-dashboard.vercel.app"
            github="https://github.com/mbrahimi25/lichess-dashboard"
            gitlab="https://gitlab.com/mbrahimi25/lichess-dashboard"
          />

          <ProjectCard
            title="TTC Visualizer"
            description="Interactive map of Toronto’s TTC subway, LRT, and streetcar system. Includes current and under-construction lines."
            tech="HTML • JavaScript • Adobe Illustrator • Vercel"
            link="https://visualize-ttc.vercel.app/"
            github="https://github.com/mbrahimi25/visualize-ttc"
            gitlab="https://gitlab.com/mbrahimi25/visualize-ttc"
          />

          <ProjectCard
            title="FBRef Stats"
            description="Python library for scraping soccer statistics from FBRef."
            tech="Python • Requests • BeautifulSoup4"
            github="https://github.com/mbrahimi25/fbrefstats"
            pypi="https://pypi.org/project/fbrefstats/"
          />

        </div>
      </section>


    </main>
  );
}