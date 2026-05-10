import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Mohamed Brahimi. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-white/60">
          <a href="https://www.linkedin.com/in/mohbrahimi/" className="hover:text-white transition duration-200 hover:scale-120">
            <FaLinkedin size={25}/>
          </a>
          <a href="https://github.com/mbrahimi25/" className="hover:text-white transition duration-200 hover:scale-120">
            <FaGithub size={25} />
          </a>
          <a href="https://gitlab.com/mbrahimi25/" className="hover:text-white transition duration-200 hover:scale-120">
            <FaGitlab size={25} />
          </a>
          <a href="mailto:momohb2007@gmail.com" className="hover:text-white transition duration-200 hover:scale-120">
            <IoMail size={25} />
          </a>
        </div>

      </div>
    </footer>
  );
}