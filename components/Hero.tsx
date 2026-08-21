"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { site } from "@/data/site";

function useISTClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-IN", {
        timeZone: site.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function Hero() {
  const time = useISTClock();

  return (
    <section id="top" className="mx-auto max-w-wide px-6 pb-20 pt-14 md:pb-28 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-content"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-2xs text-ink-muted">
            {site.availability}
          </span>
        </div>

        <h1 className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          {site.name}
        </h1>

        <p className="mt-3 font-mono text-sm text-accent-soft">{site.role}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-2xs text-ink-faint">
          <span>{site.location}</span>
          <span aria-hidden className="text-border-strong">
            ·
          </span>
          <span className="tabular-nums">
            {time ? `${time} IST` : "— IST"}
          </span>
        </div>

        <p className="mt-7 max-w-[42ch] text-base leading-relaxed text-ink-muted sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-soft"
          >
            View Projects
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-border-strong hover:bg-bg-raised"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
          {[
            { icon: GithubIcon, href: site.links.github, label: "GitHub" },
            { icon: LinkedinIcon, href: site.links.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
            { icon: FileText, href: site.links.resume, label: "Resume" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="text-ink-faint transition-colors hover:text-ink"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
