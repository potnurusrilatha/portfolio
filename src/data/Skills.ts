export type SkillCategory = {
  name: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    name: "💻 Code",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    name: "🛠️ Toolbox",
    items: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "npm / yarn",
      "Vercel",
    ],
  },
  {
    name: "🌟 Other",
    items: [
      "Agile / Scrum",
      "Team Collaboration",
      "Problem Solving",
      "UI/UX Principles",
      "Responsive Design",
      "Debugging",
      "Testing"
    ],
  },
];
