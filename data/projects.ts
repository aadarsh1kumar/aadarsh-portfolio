// TODO: fill in `repo` and `live` per project with real URLs once repos are
// public / deployed. Until then, the GitHub button falls back to the profile.

export type ProjectStatus = "Live" | "In Progress" | "Concept";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: ProjectStatus;
  stack: string[];
  repo?: string;
  live?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    architecture: string;
    challenges: string;
    learned: string;
  };
};

export const projects: Project[] = [
  {
    slug: "evolve",
    name: "E.V.O.L.V.E",
    tagline: "Making quality learning accessible, end to end.",
    description:
      "An education platform bringing recorded lectures, structured notes, and live classes into one system for students and teachers.",
    category: "EdTech / Full Stack",
    status: "Live",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    caseStudy: {
      overview:
        "E.V.O.L.V.E is built to close the gap between a student and quality instruction — one platform instead of scattered PDFs, chat groups, and third-party video links.",
      problem:
        "Students in smaller cities often stitch learning together from disconnected sources — a chat group for notes, a random playlist for lectures, no single place that tracks progress or ties a class back to its teacher.",
      solution:
        "A role-based platform with distinct student, teacher, and admin surfaces, so lectures, notes, and batches live under one system with real accounts instead of link-sharing.",
      features: [
        "Recorded lecture library organized by batch",
        "Structured notes tied to each session",
        "Course and batch management for teachers",
        "Student accounts with progress visibility",
        "Live class scheduling",
      ],
      architecture:
        "A React frontend talks to a Node/Express API, with MongoDB handling the flexible, nested shape of batches, courses, and enrollments. Three distinct role-based views are gated by auth middleware rather than one generic dashboard trying to serve everyone.",
      challenges:
        "Modelling batches, courses, and live sessions so the same underlying data could support three very different dashboards — student, teacher, admin — without duplicating logic across them.",
      learned:
        "How much of an EdTech product is really data modelling. Once batches, enrollments, and content were related correctly, the UI for each role followed naturally.",
    },
  },
  {
    slug: "farmai",
    name: "FARMAI",
    tagline: "An AI co-pilot for everyday farming decisions.",
    description:
      "AI-powered agriculture assistant helping farmers reason about crops, soil, weather, and fertilizer choices.",
    category: "AI/ML / Agriculture",
    status: "Concept",
    stack: ["Python", "Machine Learning", "AI APIs"],
    caseStudy: {
      overview:
        "Built at the Navonmesh Hackathon, FARMAI is an assistant that reasons through crop, soil, and weather decisions rather than just returning a raw prediction.",
      problem:
        "Farmers make high-stakes calls — what to plant, how much fertilizer to use, when to irrigate — often on intuition or outdated advice, with no easy way to bring data into the decision.",
      solution:
        "An assistant that takes crop, soil, and weather inputs and returns practical, explainable recommendations instead of a black-box score.",
      features: [
        "Crop recommendations based on soil and season",
        "Fertilizer guidance",
        "Weather-aware suggestions",
        "Conversational interface for asking follow-up questions",
      ],
      architecture:
        "A Python backend wraps a recommendation model together with an AI API used to translate raw outputs into plain-language explanations, kept deliberately lightweight to run within hackathon constraints.",
      challenges:
        "Turning agricultural domain knowledge into a small, defensible rule-and-model hybrid inside a 24–48 hour hackathon window.",
      learned:
        "Domain-specific AI tools live or die on trustworthy explanations, not just accurate predictions — a farmer needs to know why, not just what.",
    },
  },
  {
    slug: "dodaily",
    name: "DoDaily",
    tagline: "Habit consistency, with real stakes.",
    description:
      "A productivity platform that helps people build long-term discipline with streaks, points, and a penalty engine.",
    category: "Productivity / Web App",
    status: "Live",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    caseStudy: {
      overview:
        "Most habit trackers make skipping a day free — there's no real cost, so streaks quietly die. DoDaily attaches an actual penalty engine to daily consistency.",
      problem:
        "Streaks, points, and leaderboards are common in habit apps, but without any cost to missing a day, motivation fades within weeks.",
      solution:
        "Alongside streaks, points, and leaderboards, DoDaily runs a penalty engine, so consistency has a small, real cost attached to missing a commitment.",
      features: [
        "Daily goal tracking",
        "Streaks and points",
        "Leaderboards",
        "Challenges between users",
        "Progress tracking",
        "Penalty engine for missed commitments",
      ],
      architecture:
        "A Next.js app backed by PostgreSQL via Prisma, with a scheduled job layer evaluating daily completion and applying penalty logic at the end of each cycle.",
      challenges:
        "Designing a penalty system that motivates rather than punishes — the incentive balance took a few iterations to get right.",
      learned:
        "Small negative stakes change behaviour more than points ever did — the penalty engine ended up being the actual product, not a side feature.",
    },
  },
  {
    slug: "study-together",
    name: "Study Together",
    tagline: "A quiet room to study with other people.",
    description:
      "A collaborative study platform with live rooms and ambient audio, built to make remote studying feel less alone.",
    category: "EdTech / Web",
    status: "Live",
    stack: ["Next.js", "Express", "Socket.IO", "WebRTC"],
    caseStudy: {
      overview:
        "Studying alone at home lacks the ambient accountability of a library or a friend sitting across the table. Study Together rebuilds that feeling online.",
      problem:
        "Remote studying is often isolating — no ambient presence, no quiet accountability of someone else also working.",
      solution:
        "Real-time study rooms over WebRTC with an ambient audio layer, so people can sit together in a session while working independently.",
      features: [
        "Live WebRTC study rooms",
        "Ambient audio engine",
        "Real-time presence via Socket.IO",
        "Session-based room creation",
      ],
      architecture:
        "A Next.js frontend pairs with an Express + Socket.IO signalling layer for room state and presence, while WebRTC handles peer audio directly between participants.",
      challenges:
        "Getting WebRTC connection state and signalling reliable across different networks, and tuning cross-origin isolation headers correctly during deployment.",
      learned:
        "Real-time systems fail in ways that don't show up locally — most of the real debugging happened after deployment, not before.",
    },
  },
  {
    slug: "sona-maam",
    name: "Sona Ma'am",
    tagline: "A conversational AI teacher, prototyped.",
    description:
      "A virtual teacher concept exploring voice-driven, conversational AI for one-on-one style instruction.",
    category: "AI / Education",
    status: "Concept",
    stack: ["Python", "AI APIs", "Speech-to-Text", "Text-to-Speech"],
    caseStudy: {
      overview:
        "One-on-one teaching doesn't scale, and most AI tutoring is text-only, which loses the feel of an actual teacher. Sona Ma'am is a voice-first prototype exploring the alternative.",
      problem:
        "Personal tutoring is effective but doesn't scale, and typed chat interfaces lose the natural, spoken back-and-forth of real teaching.",
      solution:
        "A voice-first virtual teacher that holds a spoken, conversational exchange with a student rather than only answering typed prompts.",
      features: [
        "Voice-driven interaction",
        "Conversational AI responses",
        "Prototype UI for a tutoring session",
      ],
      architecture:
        "A lightweight interface wired to speech-to-text, an LLM for reasoning about the student's question, and text-to-speech for the spoken reply — a simple perceive → reason → respond loop.",
      challenges:
        "Making the conversational loop feel natural — latency across the speech-to-text → LLM → text-to-speech chain is the entire experience.",
      learned:
        "Voice interfaces live or die on latency. A technically correct answer that arrives two seconds too slow still feels broken.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
