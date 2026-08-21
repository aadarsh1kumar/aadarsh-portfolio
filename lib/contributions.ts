// Generates a deterministic, illustrative activity grid — not a live pull
// from the GitHub API. Seeded so the pattern is stable between server and
// client renders (no hydration mismatch). Swap for a real GitHub GraphQL
// contributions query if/when you wire up a token-backed API route.

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type DayCell = {
  intensity: 0 | 1 | 2 | 3 | 4;
  weekday: number; // 0 = Sunday
};

export function generateActivityGrid(weeks = 52, seed = 1337): DayCell[][] {
  const rand = mulberry32(seed);
  const grid: DayCell[][] = [];
  let streak = false;

  for (let w = 0; w < weeks; w++) {
    const week: DayCell[] = [];
    for (let d = 0; d < 7; d++) {
      const isWeekend = d === 0 || d === 6;
      const base = rand();
      streak = base > 0.62 ? true : base < 0.2 ? false : streak;

      let intensity: DayCell["intensity"] = 0;
      const roll = rand();
      if (streak && roll > 0.15) {
        intensity = roll > 0.75 ? 4 : roll > 0.5 ? 3 : roll > 0.28 ? 2 : 1;
      } else if (roll > (isWeekend ? 0.8 : 0.65)) {
        intensity = roll > 0.92 ? 2 : 1;
      }

      week.push({ intensity, weekday: d });
    }
    grid.push(week);
  }
  return grid;
}
