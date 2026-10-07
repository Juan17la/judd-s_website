"use server";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import db, { UPLOADS } from "./db";
import * as auth from "./auth";
import { cookies } from "next/headers";
import { prefs, T } from "./i18n";
import { tooMany, record } from "./limit";

const now = () => Math.floor(Date.now() / 1000);
const text = (formData, key) => String(formData.get(key) ?? "").trim();

// ---------- login / logout
export async function login(_prev, formData) {
  if (!auth.configured()) return { error: "Admin isn't set up yet. Run `npm run setup-admin` and restart the server." };
  if (tooMany("login-fail", 10, 600_000)) return { error: "Too many wrong tries. Wait 10 minutes." };
  await new Promise((r) => setTimeout(r, 500)); // slows brute force
  if (!auth.checkLogin(text(formData, "user"), String(formData.get("password") ?? ""))) {
    record("login-fail");
    return { error: "Wrong username or password." };
  }
  await auth.startSession();
  redirect("/admin");
}

export async function logout() {
  await auth.endSession();
  redirect("/admin/login");
}

// ---------- public contact form
export async function sendMessage(_prev, formData) {
  const name = text(formData, "name").slice(0, 80), email = text(formData, "email").slice(0, 120), body = text(formData, "body");
  const t = T[(await prefs()).lang];
  const fields = { name, email, body }; // sent back with errors so React's form reset doesn't wipe what was typed
  if (!name || !body || body.length > 2000) return { error: t.errFields, fields };
  if (tooMany("messages", 20, 3_600_000)) return { error: t.errMany, fields };
  record("messages");
  db.prepare("INSERT INTO messages(name,email,body,created) VALUES(?,?,?,?)").run(name, email, body, now());
  revalidatePath("/admin/messages");
  return { ok: t.sent };
}

// ---------- admin: posts
export async function createPost(_prev, formData) {
  await auth.requireAdmin();
  const body = text(formData, "body");
  if (!body || body.length > 500) return { error: "A post needs 1-500 characters.", fields: { body } };
  db.prepare("INSERT INTO posts(body,created) VALUES(?,?)").run(body, now());
  revalidatePath("/posts"); revalidatePath("/admin/posts");
  return { ok: "Posted ✦" };
}

export async function deletePost(formData) {
  await auth.requireAdmin();
  db.prepare("DELETE FROM posts WHERE id=?").run(Number(formData.get("id")));
  revalidatePath("/posts"); revalidatePath("/admin/posts");
}

// ---------- admin: gallery
// image type from the file's own bytes, never from the client's word. No SVG: it can carry scripts.
const imageExt = (b) =>
  b.subarray(0, 4).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47])) ? "png" :
  b.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff])) ? "jpg" :
  b.subarray(0, 4).toString() === "GIF8" ? "gif" :
  b.subarray(0, 4).toString() === "RIFF" && b.subarray(8, 12).toString() === "WEBP" ? "webp" : null;

export async function addGalleryItem(_prev, formData) {
  await auth.requireAdmin();
  const file = formData.get("file"), caption = text(formData, "caption").slice(0, 300);
  let src = text(formData, "url");

  if (file && file.size) { // a picked or pasted file wins over the URL box
    if (file.size > 8 * 1024 * 1024) return { error: "That image is over 8 MB.", fields: { url: src, caption } };
    const data = Buffer.from(await file.arrayBuffer()), ext = imageExt(data);
    if (!ext) return { error: "png, jpg, gif or webp only.", fields: { url: src, caption } };
    const name = `${crypto.randomBytes(8).toString("hex")}.${ext}`;
    await fs.writeFile(path.join(/*turbopackIgnore: true*/ UPLOADS, name), data);
    src = `/uploads/${name}`;
  } else if (!/^https:\/\//.test(src)) {
    return { error: "Add an image: paste one, pick a file, or give an https:// URL.", fields: { url: src, caption } };
  }
  db.prepare("INSERT INTO gallery(src,caption,created) VALUES(?,?,?)").run(src, caption, now());
  revalidatePath("/gallery"); revalidatePath("/admin/gallery");
  return { ok: "Added to the gallery ✦" };
}

export async function deleteGalleryItem(formData) {
  await auth.requireAdmin();
  const id = Number(formData.get("id")), row = db.prepare("SELECT src FROM gallery WHERE id=?").get(id);
  if (row?.src.startsWith("/uploads/")) await fs.rm(path.join(/*turbopackIgnore: true*/ UPLOADS, path.basename(row.src)), { force: true });
  db.prepare("DELETE FROM gallery WHERE id=?").run(id);
  revalidatePath("/gallery"); revalidatePath("/admin/gallery");
}

// ---------- admin: messages
export async function deleteMessage(formData) {
  await auth.requireAdmin();
  db.prepare("DELETE FROM messages WHERE id=?").run(Number(formData.get("id")));
  revalidatePath("/admin/messages");
}

// ---------- visitor preferences (cookie; the page re-renders after the action)
export async function setPref(key, value) {
  if (!({ lang: ["en", "es"], theme: ["dark", "light"] }[key] ?? []).includes(value)) return;
  (await cookies()).set(key, value, { path: "/", maxAge: 31_536_000, sameSite: "lax" });
}
