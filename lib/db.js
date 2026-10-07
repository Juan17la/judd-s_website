import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

// Vercel's project folder is read-only, so mkdir below crashed every page. Only /tmp is writable there (and it is wiped
// between instances: posts, gallery and messages don't persist on Vercel until the db moves to a hosted one).
const dir = process.env.VERCEL ? "/tmp/judds-data" : path.join(/*turbopackIgnore: true*/ process.cwd(), "data");
export const UPLOADS = path.join(dir, "uploads");
fs.mkdirSync(UPLOADS, { recursive: true });

// one connection, reused across dev hot reloads
const db = (globalThis.__db ??= new Database(path.join(dir, "site.db")));
db.exec(`
CREATE TABLE IF NOT EXISTS posts(id INTEGER PRIMARY KEY, body TEXT NOT NULL, created INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS gallery(id INTEGER PRIMARY KEY, src TEXT NOT NULL, caption TEXT NOT NULL DEFAULT '', created INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL DEFAULT '', body TEXT NOT NULL, created INTEGER NOT NULL);
`);

export default db;
