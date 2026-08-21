import { Trophy, Rocket, Lightbulb, Flag } from "lucide-react";
import { Reveal } from "./Reveal";
import { achievements } from "@/data/achievements";

const ICONS = {
  trophy: Trophy,
  rocket: Rocket,
  lightbulb: Lightbulb,
  flag: Flag,
};

export function Achievements() {
  return (
    <section className="mx-auto max-w-wide px-6 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">// achievements</p>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {achievements.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex items-start gap-4 rounded-lg border border-border bg-bg-raised p-4 transition-colors hover:border-border-strong">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-bg text-accent-soft">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
