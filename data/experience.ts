export type JourneyEntry = {
  period: string;
  title: string;
  org: string;
  points: string[];
};

export const journey: JourneyEntry[] = [
  {
    period: "2023 — 2027",
    title: "B.Tech, Computer Science",
    org: "Institute of Technology & Management",
    points: [
      "Computer Science",
      "Artificial Intelligence & Machine Learning",
      "Software Development",
    ],
  },
  {
    period: "10+ years",
    title: "Teaching & Mentoring",
    org: "Home tuition · academy · online",
    points: [
      "Taught students up to Class 10 across home tuition, academy, and online formats",
      "Mathematics, Computer Science, English, Hindi, SST, Physics, Chemistry, Biology",
    ],
  },
];
