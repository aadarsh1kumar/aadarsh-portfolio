import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-wide flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{site.name}</p>
          <p className="mt-0.5 font-mono text-2xs text-ink-faint">{site.role}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="font-mono text-2xs text-ink-faint">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
