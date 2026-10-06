import fs from "node:fs/promises";
import path from "node:path";
import { UPLOADS } from "@/lib/db";

const TYPES = { ".png": "image/png", ".jpg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp" };

// uploaded gallery images live in data/uploads (outside public/, which Next doesn't re-read at runtime)
export async function GET(_req, { params }) {
  const file = path.join(/*turbopackIgnore: true*/ UPLOADS, path.basename((await params).name));
  const type = TYPES[path.extname(file)];
  const data = type && (await fs.readFile(file).catch(() => null));
  if (!data) return new Response("not found", { status: 404 });
  return new Response(data, { headers: { "Content-Type": type, "X-Content-Type-Options": "nosniff", "Cache-Control": "public, max-age=31536000, immutable" } });
}
