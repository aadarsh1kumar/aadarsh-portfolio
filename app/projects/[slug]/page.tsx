import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects, getProject } from "@/data/projects";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name} — ${site.name}`;
  return {
    title,
    description: project.description,
    openGraph: { title, description: project.description },
    twitter: { title, description: project.description },
  };
}

const STATUS_DOT: Record<string, string> = {
  Live: "bg-accent",
  "In Progress": "bg-amber-400",
  Concept: "bg-ink-faint",
};

const CASE_STUDY_SECTIONS: Array<{
  key: keyof (typeof projects)[number]["caseStudy"];
  label: string;
}> = [
  { key: "overview", label: "Overview" },
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "architecture", label: "Architecture" },
  { key: "challenges", label: "Challenges" },
  { key: "learned", label: "What I Learned" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-6 py-16 md:py-20">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[project.status]}`} />
            <span className="font-mono text-2xs text-ink-faint">
              {project.status} · {project.category}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-[56ch] text-lg text-ink-muted">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.repo ?? site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-border-strong hover:bg-bg-raised"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {project.repo ? "View Code" : "GitHub Profile"}
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
              >
                Live Demo
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </Reveal>

        {/* Hero visual placeholder — swap for a real screenshot when available */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex h-56 items-center justify-center rounded-lg border border-border bg-bg-raised sm:h-72">
            <p className="font-mono text-sm text-ink-faint">
              {project.name} / {project.category}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_16rem]">
          <div className="space-y-10">
            {CASE_STUDY_SECTIONS.map((section, i) => (
              <Reveal key={section.key} delay={0.04 * i}>
                <div>
                  <h2 className="eyebrow">// {section.label.toLowerCase()}</h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    {caseStudy[section.key]}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div>
                <h2 className="eyebrow">// key features</h2>
                <ul className="mt-3 space-y-2">
                  {caseStudy.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="h-fit rounded-lg border border-border bg-bg-raised p-5 md:sticky md:top-24">
              <p className="eyebrow">// stack</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-2xs text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 border-t border-border pt-8">
            <p className="text-sm text-ink-muted">
              Have a similar problem to solve?{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4 hover:text-accent-soft">
                Let&apos;s talk
              </a>
              .
            </p>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
