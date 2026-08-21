export type TechGroup = {
  label: string;
  items: string[];
};

export const technologies: TechGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    label: "AI / ML",
    items: ["Python", "Machine Learning", "AI APIs", "Data Analysis"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma", "Postman", "Vercel"],
  },
];
