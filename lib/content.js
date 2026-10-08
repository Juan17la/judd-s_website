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
export const tagsLikes = { en: ["Formula 1", "Motorsport", "Writing", "Reading", "Fanfics", "Tech Reviews", "Personalization"], es: ["Fórmula 1", "Automovilismo", "Escritura", "Lectura", "Fanfics", "Reseñas de tecnología", "Personalización"] }

export const programmingLanguages = ["TypeScript", "JavaScript", "Java", "Python", "Go"];
export const frameworks = ["React", "React Native", "Fastify", "NextJS", "NestJS", "Express", "Spring Boot", "Wails", "FastAPI", "Django"];
export const databases = ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis"];
export const tools = ["Docker", "Git", "GitHub", "Claude Code", "Cursor"];
export const cloud = ["AWS", "Nginx", "Linux", "Debian", "Ubuntu"];

// Click a project card -> popup. Replace the images with real screenshots (3 or more). Empty links are hidden.
export const projects = [
  {
    name: "Udeos Launcher",
    desc: { en: "An all in one no premium minecraft launcher. Addons, instances, skins and local servers management in one place.", es: "Un launcher de Minecraft todo en uno para cuentas no premium. Addons, instancias, skins y servidores locales en un solo lugar." },
    images: ["/img/projects/udeos_launcher_thumbnail.png", "/img/projects/udeos_launcher_1.png", "/img/projects/udeos_launcher_2.png", "/img/projects/udeos_launcher_3.png"],
    about: [
      { en: "Udeos Launcher is an all-in-one Minecraft launcher for people who don't have (or don't want) a premium account. It puts the things you usually juggle across several tools in a single place: addons, game instances, skins and local servers.", es: "Udeos Launcher es un launcher de Minecraft todo en uno para quienes no tienen (o no quieren) una cuenta premium. Reúne en un solo lugar lo que normalmente se reparte entre varias herramientas: addons, instancias de juego, skins y servidores locales." },
      { en: "Instances let you keep separate setups side by side, so a clean vanilla install and a heavily modded one don't step on each other. Local servers are managed from the same app you launch the game from.", es: "Las instancias permiten mantener configuraciones separadas lado a lado, así una instalación vanilla limpia y una con muchos mods no se estorban. Los servidores locales se gestionan desde la misma app con la que lanzas el juego." },
      { en: "Under the hood it's a desktop app: Go and Wails on the backend side, a React interface on top, and an API client plus CDNs to fetch content.", es: "Por dentro es una app de escritorio: Go y Wails en el backend, una interfaz en React encima, y un cliente de API más CDNs para obtener contenido." },
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
    desc: { en: "An mobile an web application to share a whiteboard with whoever you want in real time. Quick, easy and modern for anyone with AI include to make you be faster.", es: "Una aplicación móvil y web para compartir una pizarra en tiempo real con quien quieras. Rápida, fácil y moderna, con IA incluida para que seas más veloz." },
    images: ["/img/projects/shareboard_thumbnail.png", "/img/projects/shareboard_2.png", "/img/projects/shareboard_3.png", "/img/projects/shareboard_4.png"],
    about: [
      { en: "Shareboard is a live whiteboard sharable and crossplatform. It has almost every tool you need, pencil, draw to shape, figure and text, besides AI implementation to draw for you", es: "Shareboard es una pizarra en vivo, compartible y multiplataforma. Tiene casi todas las herramientas necesarias: lápiz, dibujo a forma, figuras y texto, además de IA que dibuja por ti." },
      { en: "It's excelent to make diagrams, draw and planning, easy to use, quick and free.", es: "Es excelente para hacer diagramas, dibujar y planificar; fácil de usar, rápida y gratuita." },
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
    desc: { en: "A Wear OS app that lets smartwatch groups talk through haptic Morse code, with AI dictation.", es: "Una app de Wear OS que permite a grupos de relojes inteligentes comunicarse mediante código Morse háptico, con dictado por IA." },
    images: ["/img/projects/morse_thumbnail.png"],
    about: [
      { en: "Morse is a Wear OS application where groups of smartwatches communicate through haptic Morse code: you feel the message on your wrist instead of reading it.", es: "Morse es una aplicación de Wear OS donde grupos de relojes inteligentes se comunican mediante código Morse háptico: sientes el mensaje en la muñeca en lugar de leerlo." },
      { en: "It also features AI dictation, so you can speak a message and have it sent as Morse.", es: "También incluye dictado por IA, así que puedes decir un mensaje y enviarlo como Morse." },
    ],
    tags: ["Kotlin", "Wear OS", "AI Dictation", "Haptics"],
    links: { repo: "https://github.com/juan17la/Morse", site: "", preview: "" },
  },
  {
    name: "AloMedia",
    desc: { en: "A browser-based video editor with a multi-track timeline, real-time preview and client-side processing.", es: "Un editor de video en el navegador con línea de tiempo multipista, vista previa en tiempo real y procesamiento en el cliente." },
    images: ["/img/projects/alomedia_thumbnail.png"],
    about: [
      { en: "AloMedia is a video editor that runs entirely in the browser. It features a multi-track timeline and a real-time preview.", es: "AloMedia es un editor de video que funciona completamente en el navegador. Ofrece una línea de tiempo multipista y vista previa en tiempo real." },
      { en: "Media processing happens client-side, powered by FFmpeg. A Spring Boot backend handles media metadata.", es: "El procesamiento de medios ocurre en el cliente, con FFmpeg. Un backend en Spring Boot gestiona los metadatos." },
    ],
    tags: ["React", "TypeScript", "FFmpeg", "Spring Boot"],
    links: { repo: "https://github.com/juan17la/AloMediaReact", site: "", preview: "" },
  },
];

export const education = [
  { name: { en: "Software Engineering", es: "Ingeniería de Software" }, organization: "Universidad Cooperativa de Colombia", start: { en: "August 2024", es: "Agosto 2024" }, end: { en: "Present (Expected graduation in 2028)", es: "Actualidad (Graduación esperada en 2028)" } },
  { name: "AWS Practitioner Essentials", organization: "Amazon Skill Builder Course", start: { en: "July 2026", es: "Julio 2026" }, end: { en: "September 2026", es: "Septiembre 2026" } },
  { name: { en: "Intensive English Course", es: "Curso intensivo de inglés" }, organization: "Cambridge Academy of Languages - Colombia", start: { en: "January 2024", es: "Enero 2024" }, end: { en: "June 2025", es: "Junio 2025" } },
];

export const certifications = [
  {
    name: "AWS Practitioner Essentials",
    organization: "Amazon Skill Builder Course",
    imgHref: "https://i.pinimg.com/736x/9f/5c/00/9f5c0021d51717e305e3f91f967abbc3.jpg",
  },
  {
    name: { en: "English C1 (Advanced)", es: "Inglés C1 (Avanzado)" },
    organization: { en: "CEFR C1 certification", es: "Certificación MCER C1" },
    imgHref: "",
  },
];
