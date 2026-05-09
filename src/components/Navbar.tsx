export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 px-6 py-4">
      <h1 className="text-xl font-bold">
        Mohamed Brahimi
      </h1>

      <div className="flex gap-6 text-sm text-white/70">
        <a href="#" className="hover:text-white">
          About
        </a>

        <a href="#" className="hover:text-white">
          Projects
        </a>

        <a href="#" className="hover:text-white">
          Contact
        </a>
      </div>
    </nav>
  );
}