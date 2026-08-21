"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import type { Project } from "@/data/projects";
import { site } from "@/data/site";

const STATUS_DOT: Record<Project["status"], string> = {
  Live: "bg-accent",
  "In Progress": "bg-amber-400",
  Concept: "bg-ink-faint",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group relative rounded-lg border border-border bg-bg-raised p-6 transition-colors hover:border-border-strong sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[project.status]}`} />
            <span className="font-mono text-2xs text-ink-faint">
              {project.status} · {project.category}
            </span>
          </div>
          <h3 className="mt-2.5 text-xl font-medium text-ink">{project.name}</h3>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <a
            href={project.repo ?? site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub`}
            onClick={(e) => e.stopPropagation()}
            className="flex h-8 w-8 items-center justify-center rounded-md text-ink-faint transition-colors hover:bg-bg-elevated hover:text-ink"
          >
            <GithubIcon className="h-[15px] w-[15px]" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-md text-ink-faint transition-colors hover:bg-bg-elevated hover:text-ink"
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border px-2 py-0.5 font-mono text-2xs text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent-soft"
      >
        Read case study
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
