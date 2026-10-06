import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const dir = path.join(/*turbopackIgnore: true*/ process.cwd(), "data");
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
