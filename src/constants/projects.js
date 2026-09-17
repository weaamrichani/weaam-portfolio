// Content shown in the "View Project" modal on the Work section.
// Kept deliberately short — the full technical write-up lives in each
// project's README on GitHub (linked via `github` below).
//
// `screenshots`: add more image paths here as you capture them
// (e.g. put files in public/images/projects/<slug>/ and list them).
// `video`: optional path to an mp4 screen recording (e.g. for Notify) —
// leave null until you have one.

const projects = [
  {
    slug: "zefet",
    title: "Zefet",
    tagline:
      "An AI-powered Road Damage Detection And Repair Prioritization For Lebanon",
    description:
      "Zefet detects potholes and cracks from geotagged photos submitted by users, then computes a severity-weighted priority score — giving Lebanese municipalities an evidence-based tool for deciding which roads to repair first. Built as a capstone for the LebNet Tech Fellows Program, it fine-tunes a YOLOv8m model on locally collected Lebanese road photos to close the domain gap left by international training data.",
    features: [
      "Upload a geotagged road photo (device GPS or manual coordinates)",
      "Automatic damage detection: potholes, longitudinal/transverse cracks, alligator cracks",
      "Severity-weighted priority scoring (Urgent / High / Monitor)",
      "Interactive map with severity-graded pins",
    ],
    techStack: [
      "YOLOv8 (PyTorch)",
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "react-leaflet",
    ],
    github: "https://github.com/weaamrichani/road-damage-lebanon",
    demo: null,
    screenshots: ["/images/zefet.png"],
    video: "/videos/Zefet_demo.mp4",
  },
  {
    slug: "notify",
    title: "Notify",
    tagline: "A polished Flutter note-taking app",
    description:
      "Notify is a cross-platform note-taking app built with Flutter — create, edit, pin, and favorite notes, with swipe-to-delete, bulk selection, and full light/dark theming that persists between launches.",
    features: [
      "Create, edit, pin, and favorite notes",
      "Swipe-to-delete with confirmation, plus multi-select bulk delete",
      "Separate Favorites tab",
      "Light & dark mode, remembered between launches",
      "Built-in in-app FAQ",
    ],
    techStack: ["Flutter", "Dart", "Provider", "SharedPreferences"],
    github: "https://github.com/weaamrichani/Notify",
    demo: null,
    screenshots: ["/images/NotifyLogo.jpg"],
    video: "/videos/notify-demo.mp4",
  },
  {
    slug: "snakes-and-ladders",
    title: "Snakes and Ladders",
    tagline: "A reimagined take on the classic board game",
    description:
      "A full-stack, browser-based Snakes & Ladders with a PixiJS-rendered board, smooth token animations, and sound design — playable solo against an AI opponent or pass-and-play with a friend.",
    features: [
      "Solo vs. AI, or local pass-and-play",
      "Roll history sidebar",
      "WebGL board rendering via PixiJS",
      "Music & sound effects via Howler.js",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "PixiJS",
      "Zustand",
      "Howler.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/weaamrichani/snakes-and-ladders",
    demo: "https://snakes-and-ladders-wr4.vercel.app/",
    screenshots: ["/images/snakes_ladders.png"],
    video: "/videos/SnakesLadderDemo.mp4",
  },
];

export default projects;
