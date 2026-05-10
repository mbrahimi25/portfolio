import { FaGithub, FaGitlab, FaExternalLinkAlt } from "react-icons/fa";
import { SiPypi } from "react-icons/si"
import { GrArticle } from "react-icons/gr";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  article?: string;
  link?: string;
  github?: string;
  gitlab?: string;
  pypi?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  article,
  link,
  github,
  gitlab,
  pypi,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-white/70">
        {description}
      </p>

      <p className="mt-4 text-sm text-white/50">
        {tech}
      </p>

      

      <div className="mt-6 flex gap-2">
        {article && (
          <a
          href={article}
          className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-80">
          <GrArticle size={20}/>
          </a>
        )}

        {link && (
          <a
          href={link}
          target="_blank"
          className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-80">
          <FaExternalLinkAlt size={20}/>
          </a>
        )}

        {github && (
          <a
          href={github}
          target="_blank"
          className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-80">
          <FaGithub size={20}/>
          </a>
        )}

        {gitlab && (
          <a
          href={gitlab}
          target="_blank"
          className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-80">
          <FaGitlab size={20}/>
          </a>
        )}

        {pypi && (
          <a
          href={pypi}
          target="_blank"
          className="mt-6 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-80">
          <SiPypi size={20}/>
          </a>
        )}


      </div>

    </div>
  );
}