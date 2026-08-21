import { Reveal } from "./Reveal";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">// stack</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Technologies
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <div className="h-full bg-bg-raised p-5">
              <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint">
                {group.label}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
