import { Reveal } from "./Reveal";
import { journey } from "@/data/experience";

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">// journey</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Journey
        </h2>
      </Reveal>

      <div className="mt-10 max-w-content">
        {journey.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.08}>
            <div className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full border-2 border-accent bg-bg" />
                {i < journey.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-border" />
                )}
              </div>

              <div className="pb-1">
                <p className="font-mono text-2xs text-ink-faint">{entry.period}</p>
                <h3 className="mt-1.5 text-lg font-medium text-ink">
                  {entry.title}
                </h3>
                <p className="mt-0.5 text-sm text-ink-muted">{entry.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
