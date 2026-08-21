import { Reveal } from "./Reveal";
import { currentlyBuilding } from "@/data/site";

const INTERESTS = [
  "Building products",
  "AI/ML",
  "Full-stack development",
  "Education technology",
  "Hackathons",
  "New technologies",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">// about</p>
      </Reveal>

      <div className="mt-6 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05}>
          <div className="max-w-content">
            <p className="text-xl leading-relaxed text-ink sm:text-2xl">
              I&apos;m a Computer Science student and builder focused on
              AI/ML, full-stack development, and products that solve
              real-world problems.
            </p>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-muted">
              I enjoy turning ideas into working applications — from
              education platforms and productivity tools to AI-powered
              systems. Most of what I build starts as a problem I&apos;ve run
              into myself, or watched someone else struggle with.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {INTERESTS.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1 font-mono text-2xs text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-bg-raised p-5">
            <p className="eyebrow">// currently</p>
            <ul className="mt-4 space-y-3">
              {currentlyBuilding.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
