const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "I Notice Things",
    desc: "Spacing, alignment, weird buttons, that one pixel that somehow looks wrong... I tend to notice them.",
  },
  {
    imgPath: "/images/chat.png",
    title: "I Don't Vanish",
    desc: "You'll know what's happening, what's working, and what isn't.",
  },
  {
    imgPath: "/images/time.png",
    title: "I Actually Finish Things",
    desc: "I like starting projects, but I like finishing them even more. Build it, fix it, polish it, ship it.",
  },
];

const expCards = [
  {
    review:
      "During Weaam’s time with us, he demonstrated strong technical understanding and a practical approach to assisting customers with their needs. He was able to assess requirements, recommend suitable and cost-effective products, and communicate technical information clearly. He also handled inventory responsibilities with attention to detail, helping maintain accurate stock levels and support smooth day-to-day operations.",
    logoPath: "/images/RichaniHardware.jpg",
    title: "Client Service Specialist",
    date: "May 2021 – July 2022",
    responsibilities: [
      "Provided technical product recommendations by assessing customer requirements and identifying cost-effective solutions for specific use cases. ",
      "Managed inventory operations, monitored stock levels, and identified shortages to maintain daily store operations and minimize downtime.",
    ],
  },
  {
    review:
      "What stood out to me most about Weaam was his ability to quickly learn and adapt to new programming languages and frameworks throughout his internship at Medco. He consistently demonstrated a strong willingness to learn, adapt, and take on new challenges.",
    logoPath: "/images/medcologo.png",
    title: "Cross-Platform Web Development ",
    date: "July 2024 – September 2024",
    responsibilities: [
      "Quickly ramped up on Dart and Flutter and independently developed a functional cross-platform note-taking application within a short internship period. ",
      "Implemented core application functionality including note creation, editing, deletion, and favorites management. ",
    ],
  },
  {
    review:
      "One of Weaam’s greatest strengths was his ability to learn quickly and apply new knowledge in real time. He approached challenges with curiosity and resourcefulness, often thinking through alternative turnarounds when faced with constraints. This mindset allowed him to move our AI project forward efficiently and creatively. His work was thoughtful, well-executed, and aligned with our needs, demonstrating his ability to translate ideas into functional and effective solutions.",
    logoPath: "/images/StoriesLogo.jpg",
    title: "AI Operations & Full-Stack Web Development",
    date: "December 2025 – March 2026",
    responsibilities: [
      "Developed and enhanced features for an AI-powered brand strategy platform built with React, TypeScript, and Supabase, featuring an AI avatar interviewer, real-time voice transcription, and automated AI-generated brand analysis reports. ",
      "Took ownership of full-stack feature development within a large inherited codebase, implementing, testing, debugging, documenting, and deploying production features across the frontend, Supabase backend, database, and third-party API integrations.",
      "Engineered persistent interview-session management by integrating React application state with Supabase database persistence, enabling automatic answer saving, session resumption after interruptions or page refreshes, completion tracking, and restoration of previous responses.",
      "Developed and deployed Supabase Edge Functions and API integrations for automated welcome emails and postinterview report delivery using Resend, while implementing error logging, API testing, secure secret management, and production troubleshooting. ",
      "Delivered 16 documented feature improvements and fixes across authentication, UI/UX, interview workflows, report generation, AI analysis, email automation, image hosting, and product functionality, including a new LateStage founder experience. ",
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/w_richani?stkn=cG9tZnQzeHFhdGdj",
    imgPath: "/images/instagramLogo.jpg",
  },

  {
    name: "whatsapp",
    url: "https://wa.me/qr/E5MUNZRMJVZOE1",
    imgPath: "/images/whatsappLogo.jpg",
  },

  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/weaamrichani?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    imgPath: "/images/linkedInLogo.jpg",
  },
];

export { words, abilities, expCards, socialImgs, navLinks };
