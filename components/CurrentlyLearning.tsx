import { Reveal } from "./Reveal";
import { currentlyLearning } from "@/data/site";

export function CurrentlyLearning() {
  return (
    <section className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">// learning</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Currently Learning
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {currentlyLearning.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.04}>
            <div className="rounded-lg border border-border p-4 transition-colors hover:border-border-strong hover:bg-bg-raised">
              <p className="text-sm font-medium text-ink">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                {item.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
