import { Reveal } from "./Reveal";
import { exploring } from "@/data/site";

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="eyebrow">// writing</p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Writing
            </h2>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
              Longer-form notes on building products, AI systems, and the
              trade-offs in between.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-dashed border-border px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-faint" />
              <span className="font-mono text-2xs text-ink-faint">
                First post in progress — check back soon
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="eyebrow">// exploring</p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              What I&apos;m Exploring
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {exploring.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-sm text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
