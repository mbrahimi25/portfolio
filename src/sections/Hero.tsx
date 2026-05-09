export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-widest text-white/60">
        Developer Portfolio
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        Building modern web applications.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-white/70">
        I create responsive websites, dashboards, and full-stack projects
        using modern technologies.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-80"
        >
          View Projects
        </a>

        <a
          href="#"
          className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}