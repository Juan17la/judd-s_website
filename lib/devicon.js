// tech name (as written in content.js) -> devicon slug. Names not listed get a Phosphor glyph in TechChip.
const SLUGS = {
  TypeScript: "typescript/typescript-original", JavaScript: "javascript/javascript-original", Java: "java/java-original",
  Python: "python/python-original", Go: "go/go-original-wordmark", Kotlin: "kotlin/kotlin-original",
  React: "react/react-original", "React Native": "react/react-original", Fastify: "fastify/fastify-plain",
  NextJS: "nextjs/nextjs-original", NestJS: "nestjs/nestjs-original", Express: "express/express-original",
  "Spring Boot": "spring/spring-original", FastAPI: "fastapi/fastapi-original", Django: "django/django-plain",
  NodeJS: "nodejs/nodejs-original", Websockets: "socketio/socketio-original",
  PostgreSQL: "postgresql/postgresql-original", MySQL: "mysql/mysql-original", MongoDB: "mongodb/mongodb-original",
  SQLite: "sqlite/sqlite-original", Redis: "redis/redis-original",
  Docker: "docker/docker-original", Git: "git/git-original", GitHub: "github/github-original",
  AWS: "amazonwebservices/amazonwebservices-plain-wordmark", Nginx: "nginx/nginx-original",
  Linux: "linux/linux-original", Debian: "debian/debian-original", Ubuntu: "ubuntu/ubuntu-original",
};
// logos drawn in black, unreadable on the dark theme
export const DARK_LOGOS = new Set(["NextJS", "Express", "GitHub", "Fastify"]);

export const devicon = (name) => SLUGS[name] && `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${SLUGS[name]}.svg`;
