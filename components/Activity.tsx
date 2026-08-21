import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { generateActivityGrid } from "@/lib/contributions";
import { site } from "@/data/site";

const INTENSITY_CLASS: Record<number, string> = {
  0: "bg-bg-elevated",
  1: "bg-accent-dim",
  2: "bg-accent/35",
  3: "bg-accent/65",
  4: "bg-accent",
};

const WEEKDAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

export function Activity() {
  const grid = generateActivityGrid();

  return (
    <section className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">// activity</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Building in Public
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 overflow-x-auto rounded-lg border border-border bg-bg-raised p-5">
          <div className="flex min-w-[560px] gap-[3px]">
            <div className="mr-1 flex flex-col justify-between py-[1px] font-mono text-[10px] text-ink-faint">
              {WEEKDAY_LABELS.map((label, i) => (
                <span key={i} className="h-[11px] leading-[11px]">
                  {label}
                </span>
              ))}
            </div>
            {grid.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`h-[11px] w-[11px] rounded-[2px] ${INTENSITY_CLASS[day.intensity]}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <p className="font-mono text-2xs text-ink-faint">
              Illustrative activity pattern, not a live pull from the GitHub API.
            </p>
            <div className="flex items-center gap-1.5 font-mono text-2xs text-ink-faint">
              Less
              {[0, 1, 2, 3, 4].map((level) => (
                <span
                  key={level}
                  className={`h-[10px] w-[10px] rounded-[2px] ${INTENSITY_CLASS[level]}`}
                />
              ))}
              More
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <a
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-accent-soft"
        >
          GitHub Profile
          <ArrowUpRight size={14} />
        </a>
      </Reveal>
    </section>
  );
}
