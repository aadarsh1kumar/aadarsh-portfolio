export type Achievement = {
  icon: "trophy" | "rocket" | "lightbulb" | "flag";
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    icon: "trophy",
    title: "Bharat 100 Hackathon",
    detail: "3rd position",
  },
  {
    icon: "rocket",
    title: "IIT Bombay E-Cell",
    detail: "Selected to pitch a startup idea",
  },
  {
    icon: "lightbulb",
    title: "Navonmesh Hackathon",
    detail: "Built FARMAI — an AI-powered agriculture solution",
  },
  {
    icon: "flag",
    title: "Madan Mohan Malaviya Gorakhpur DSA Challenge",
    detail: "Reached the grand finale",
  },
];
