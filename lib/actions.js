"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { run } from "./db";
import * as auth from "./auth";
import { cookies } from "next/headers";
import { prefs, T } from "./i18n";
import { tooMany, record } from "./limit";

const now = () => Math.floor(Date.now() / 1000);
const text = (formData, key) => String(formData.get(key) ?? "").trim();

// ---------- login / logout
export async function login(_prev, formData) {
  if (!auth.configured()) return { error: "Admin isn't set up yet. Run `npm run setup-admin`, then push the secrets (see README)." };
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
  await run("INSERT INTO messages(name,email,body,created) VALUES(?,?,?,?)", name, email, body, now());
  revalidatePath("/admin/messages");
  return { ok: t.sent };
}

// ---------- admin: posts
export async function createPost(_prev, formData) {
  await auth.requireAdmin();
  const body = text(formData, "body");
  if (!body || body.length > 500) return { error: "A post needs 1-500 characters.", fields: { body } };
  await run("INSERT INTO posts(body,created) VALUES(?,?)", body, now());
  revalidatePath("/posts"); revalidatePath("/admin/posts");
  return { ok: "Posted ✦" };
}

export async function deletePost(formData) {
  await auth.requireAdmin();
  await run("DELETE FROM posts WHERE id=?", Number(formData.get("id")));
  revalidatePath("/posts"); revalidatePath("/admin/posts");
}

// ---------- admin: gallery
export async function addGalleryItem(_prev, formData) {
  await auth.requireAdmin();
  const caption = text(formData, "caption").slice(0, 300), src = text(formData, "url");
  if (!/^https:\/\//.test(src)) return { error: "Give an https:// image URL.", fields: { url: src, caption } };
  await run("INSERT INTO gallery(src,caption,created) VALUES(?,?,?)", src, caption, now());
  revalidatePath("/gallery"); revalidatePath("/admin/gallery");
  return { ok: "Added to the gallery ✦" };
}

export async function deleteGalleryItem(formData) {
  await auth.requireAdmin();
  await run("DELETE FROM gallery WHERE id=?", Number(formData.get("id")));
  revalidatePath("/gallery"); revalidatePath("/admin/gallery");
}

// ---------- admin: messages
export async function deleteMessage(formData) {
  await auth.requireAdmin();
  await run("DELETE FROM messages WHERE id=?", Number(formData.get("id")));
  revalidatePath("/admin/messages");
}

// ---------- visitor preferences (cookie; the page re-renders after the action)
export async function setPref(key, value) {
  if (!({ lang: ["en", "es"], theme: ["dark", "light"] }[key] ?? []).includes(value)) return;
  (await cookies()).set(key, value, { path: "/", maxAge: 31_536_000, sameSite: "lax" });
}
