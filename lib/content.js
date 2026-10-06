// All the content lists live here. Page text is written directly in the pages.


// profile pic: drop a file in public/img/ and set e.g. "/img/avatar.jpg" (the old Instagram CDN link expires). Empty = monogram.
export const avatar = "";

export const linksSocialMedia = [
  { name: "Github", url: "https://github.com/juan17la", username: "@juan17la" },
  { name: "LinkedIn", url: "https://linkedin.com/in/juan07diego", username: "@juan07diego" },
  { name: "X", url: "https://twitter.com/1714Jud", username: "@1714Jud" },
  { name: "Instagram", url: "https://instagram.com/1714jud", username: "@1714jud" },
];

export const tagsVideogames = ["Minecraft", "Roblox", "Fornite", "Gta V", "Cry Of Fear", "Five Nights at Freddy's"];
export const tagsMusica = ["Bring me the Horizon", "Silverstein", "Radiohead", "Deftones", "Slipknot", "Modern Baseball"];
export const tagsLikes = ["Formula 1", "Motorsport", "Writting", "Reading","Fanfics","Tech Reviews", "Personalization"]

export const programmingLanguages = ["TypeScript", "JavaScript", "Java", "Python", "Go"];
export const frameworks = ["React", "React Native", "Fastify", "NextJS", "NestJS", "Express", "Spring Boot", "Wails", "FastAPI", "Django"];
export const databases = ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"];
export const tools = ["Docker", "Git", "GitHub", "Claude Code", "Cursor"];
export const cloud = ["AWS", "Ngix", "Linux", "Debian", "Ubuntu"];

// Click a project card -> popup. Replace the images with real screenshots (3 or more). Empty links are hidden.
export const projects = [
  {
    name: "Udeos Launcher",
    desc: "An all in one no premium minecraft launcher. Addons, instances, skins and local servers management in one place.",
    images: ["/img/projects/udeos_launcher_thumbnail.png", "/img/projects/udeos_launcher_1.png", "/img/projects/udeos_launcher_2.png", "/img/projects/udeos_launcher_3.png"],
    about: [
      "Udeos Launcher is an all-in-one Minecraft launcher for people who don't have (or don't want) a premium account. It puts the things you usually juggle across several tools in a single place: addons, game instances, skins and local servers.",
      "Instances let you keep separate setups side by side, so a clean vanilla install and a heavily modded one don't step on each other. Local servers are managed from the same app you launch the game from.",
      "Under the hood it's a desktop app: Go and Wails on the backend side, a React interface on top, and an API client plus CDNs to fetch content.",
    ],
    tags: ["Go", "Wails", "React", "CDNs", "API Client", "Desktop"],
    links: {
      repo: "https://github.com/juan17la/Udeos_Launcher",
      site: "",
      preview: "https://github.com/juan17la/Udeos_Launcher/releases",
    },
  },
  {
    name: "Shareboard",
    desc: "An mobile an web application to share a whiteboard with whoever you want in real time. Quick, easy and modern for anyone with AI include to make you be faster.",
    images: ["/img/projects/shareboard_thumbnail.png", "/img/projects/shareboard_2.png", "/img/projects/shareboard_3.png", "/img/projects/shareboard_4.png"],
    about: [
      "Shareboard is a live whiteboard sharable and crossplatform. It has almost every tool you need, pencil, draw to shape, figure and text, besides AI implementation to draw for you",
      "It's excelent to make diagrams, draw and planning, easy to use, quick and free.",
    ],
    tags: ["React Native", "React", "NodeJS", "Fastify", "Websockets", "MongoDB"],
    links: {
      repo: "https://github.com/juan17la/shareboard_mobile",
      site: "https://shareboard-web.vercel.app",
      preview: "https://github.com/juan17la/shareboard_mobile/releases",
    },
  },
  {
    name: "Morse",
    desc: "A Wear OS app that lets smartwatch groups talk through haptic Morse code, with AI dictation.",
    images: ["/img/projects/morse_thumbnail.png"],
    about: [
      "Morse is a Wear OS application where groups of smartwatches communicate through haptic Morse code: you feel the message on your wrist instead of reading it.",
      "It also features AI dictation, so you can speak a message and have it sent as Morse.",
    ],
    tags: ["Kotlin", "Wear OS", "AI Dictation", "Haptics"],
    links: { repo: "https://github.com/juan17la/Morse", site: "", preview: "" },
  },
  {
    name: "AloMedia",
    desc: "A browser-based video editor with a multi-track timeline, real-time preview and client-side processing.",
    images: ["/img/projects/alomedia_thumbnail.png"],
    about: [
      "AloMedia is a video editor that runs entirely in the browser. It features a multi-track timeline and a real-time preview.",
      "Media processing happens client-side, powered by FFmpeg. A Spring Boot backend handles media metadata.",
    ],
    tags: ["React", "TypeScript", "FFmpeg", "Spring Boot"],
    links: { repo: "https://github.com/juan17la/AloMediaReact", site: "", preview: "" },
  },
];

export const education = [
  { name: "Software Engineering", organization: "Universidad Cooperativa de Colombia", start: "Agoust 2024", end: "Present (Expected graduation in 2028)" },
  { name: "AWS Practitioner Essentials", organization: "Amazon Skill Builder Course", start: "July 2026", end: "September 2026" },
  { name: "Intensive English Course", organization: "Cambridge Academy of Languages - Colombia", start: "January 2024", end: "June 2025" },
];

export const certifications = [
  {
    name: "AWS Practitioner Essentials",
    organization: "Amazon Skill Builder Course",
    imgHref: "https://i.pinimg.com/736x/9f/5c/00/9f5c0021d51717e305e3f91f967abbc3.jpg",
  },
  {
    name: "English C1 (Advanced)",
    organization: "CEFR C1 certification",
    imgHref: "",
  },
];
