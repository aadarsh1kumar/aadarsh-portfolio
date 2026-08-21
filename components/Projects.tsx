import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">// projects</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Featured Projects
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
