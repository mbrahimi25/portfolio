import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const articles = [
  {
    slug: "first-post",
    title: "My First Post",
    description: "Intro to my writing.",
  },
  {
    slug: "nextjs-tips",
    title: "Next.js Tips",
    description: "Useful patterns I learned.",
  },
];

export default function PagesIndex() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero-style header */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Pages & Articles
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Notes, thoughts, and technical write-ups.
        </p>

        <div className="mt-6 h-px w-24 bg-white/20" />
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/pages/${a.slug}`}
              className="block rounded-xl border border-white/10 bg-white/5 p-6 text-center transition hover:bg-white/10"
            >
              <h2 className="text-2xl font-bold">
                {a.title}
              </h2>

              <p className="mt-2 text-white/60">
                {a.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}