import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-wide px-6 py-24 md:py-32">
      <Reveal>
        <div className="max-w-content">
          <p className="eyebrow">// contact</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Have an idea worth building?
          </h2>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-muted">
            I&apos;m always interested in interesting products, collaborations,
            internships, and ambitious ideas.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-1.5 rounded-md bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-border-strong hover:bg-bg-raised"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-border-strong hover:bg-bg-raised"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 font-mono text-sm text-ink-faint">
            <span className="text-accent-soft">$</span> mailto {site.email}
            <span className="ml-0.5 animate-blink text-accent">▌</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
