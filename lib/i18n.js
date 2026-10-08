import { cookies } from "next/headers";

export async function prefs() {
  const c = await cookies();
  return { lang: c.get("lang")?.value === "es" ? "es" : "en", theme: c.get("theme")?.value === "light" ? "light" : "dark" };
}

// resolve every { en, es } leaf of a content tree to one language
export const loc = (v, lang) =>
  Array.isArray(v) ? v.map((x) => loc(x, lang))
  : v && typeof v === "object" ? ("en" in v ? loc(v[lang], lang) : Object.fromEntries(Object.entries(v).map(([k, x]) => [k, loc(x, lang)])))
  : v;

export const T = {
  en: {
    home: "Judd's Portfolio", posts: "Posts", gallery: "Gallery",
    social: "Social Media", videogames: "Videogames", music: "Music", likes: "Likes", fanfic: "Last Fanfic Read", by: "by", learning: "Learning", inBass: "In Bass",
    intro: "Introduction", hello: "hi! hello! Hola! Alo!", role: "Full-stack developer · System Design", open: "Open to work", contactMe: "Contact me",
    p1: "I'm Juan (Jud), a software engineer and full stack developer focused on System Design, slowly learning more deeply about infrastructure and Software Architecture.",
    p2: "Lately I've been honing my skills with AI to go wider than just writing prompts, while keeping up with the latest news, discussions and trends. I'm currently interested in Agentic Coding and more strategies with AI.",
    p3: "Something else about me: I love Linux personalization and apps that require the least amount of complexity. I sometimes have silly dreams, like becoming Tony Stark and getting my own Jarvis working with me 24/7 :P",
    stack: "Tech Stack", languages: "Programming Languages", frameworks: "Frameworks & Libraries", databases: "Databases", tools: "Tools & AI", cloud: "Cloud & Infrastructure",
    projects: "Projects", education: "Education & Courses", certs: "Certifications", contact: "Contact",
    details: "View details", builtWith: "Built with", links: "Links", close: "Close", repo: "Repository", site: "Official page", preview: "Preview / Download",
    name: "Your name", email: "Email", emailHint: "(optional, only if you want a reply)", message: "Message", msgPh: "Your message", send: "Send message", sending: "Sending...",
    aboutMe: "About me", badges: "Badges", rows: [["Name", "Juan Diego"], ["Age", "19"], ["Country", "Colombia"], ["Into", "Linux & AI"]],
    bio: "just a guy with a keyboard and too many opinions about linux.", empty: "Nothing here yet.", via: "via web",
    footer: "© 2026 Jud · Built with Next.js", theme: "Toggle theme", language: "Language",
    sent: "Sent! Thank you.", errFields: "Name and a message (max 2000 characters) are required.", errMany: "Too many messages right now, try again later.",
  },
  es: {
    home: "Portafolio de Judd", posts: "Publicaciones", gallery: "Galería",
    social: "Redes sociales", videogames: "Videojuegos", music: "Música", likes: "Gustos", fanfic: "Último fanfic leído", by: "por", learning: "Aprendiendo", inBass: "En bajo",
    intro: "Introducción", hello: "¡hola! ¡hello! ¡Alo!", role: "Desarrollador full stack · Diseño de sistemas", open: "Disponible para trabajar", contactMe: "Contáctame",
    p1: "Soy Juan (Jud), ingeniero de software y desarrollador full stack enfocado en Diseño de Sistemas, aprendiendo poco a poco más a fondo sobre infraestructura y Arquitectura de Software.",
    p2: "Últimamente he estado afinando mis habilidades con IA para ir más allá de escribir prompts, manteniéndome al día con noticias, discusiones y tendencias. Me interesa especialmente el Agentic Coding y más estrategias con IA.",
    p3: "Algo más sobre mí: me encanta la personalización de Linux y las apps que requieren la menor complejidad posible. A veces tengo sueños tontos, como convertirme en Tony Stark y tener mi propio Jarvis trabajando conmigo 24/7 :P",
    stack: "Stack tecnológico", languages: "Lenguajes de programación", frameworks: "Frameworks y librerías", databases: "Bases de datos", tools: "Herramientas e IA", cloud: "Nube e infraestructura",
    projects: "Proyectos", education: "Educación y cursos", certs: "Certificaciones", contact: "Contacto",
    details: "Ver detalles", builtWith: "Construido con", links: "Enlaces", close: "Cerrar", repo: "Repositorio", site: "Página oficial", preview: "Vista previa / Descarga",
    name: "Tu nombre", email: "Correo", emailHint: "(opcional, solo si quieres respuesta)", message: "Mensaje", msgPh: "Tu mensaje", send: "Enviar mensaje", sending: "Enviando...",
    aboutMe: "Sobre mí", badges: "Insignias", rows: [["Nombre", "Juan Diego"], ["Edad", "19"], ["País", "Colombia"], ["Me gusta", "Linux e IA"]],
    bio: "solo un tipo con un teclado y demasiadas opiniones sobre linux.", empty: "Aún no hay nada aquí.", via: "vía web",
    footer: "© 2026 Jud · Hecho con Next.js", theme: "Cambiar tema", language: "Idioma",
    sent: "¡Enviado! Gracias.", errFields: "Se requieren un nombre y un mensaje (máx. 2000 caracteres).", errMany: "Demasiados mensajes ahora mismo, inténtalo más tarde.",
  },
};
