"use client";

import { useState } from "react";

import {
  FaGithub,
  FaGitlab,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { SiPypi } from "react-icons/si";
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
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/20 hover:bg-white/10"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            300px circle at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.12),
            transparent 40%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-white/70">
          {description}
        </p>

        <p className="mt-4 text-sm text-white/50">
          {tech}
        </p>

        <div className="mt-6 flex gap-4">

          {article && (
            <a
              href={article}
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-120"
            >
              <GrArticle size={20} />
            </a>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-120"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-120"
            >
              <FaGithub size={20} />
            </a>
          )}

          {gitlab && (
            <a
              href={gitlab}
              target="_blank"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-120"
            >
              <FaGitlab size={20} />
            </a>
          )}

          {pypi && (
            <a
              href={pypi}
              target="_blank"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-120"
            >
              <SiPypi size={20} />
            </a>
          )}

        </div>
      </div>
    </div>
  );
}