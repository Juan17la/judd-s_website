// Single owner. Username and password are never stored: .env.local holds only salted scrypt hashes
// (made by `npm run setup-admin`) plus a random secret that signs the session cookie.
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const WEEK = 7 * 24 * 3600; // seconds
const { ADMIN_USER_HASH, ADMIN_PASS_HASH, SESSION_SECRET } = process.env;

const scrypt = (value, saltHex) => crypto.scryptSync(value, Buffer.from(saltHex, "hex"), 32);
function matches(value, stored = "") {
  const [salt, hash] = stored.split(":");
  try { return crypto.timingSafeEqual(scrypt(value, salt), Buffer.from(hash, "hex")); } catch { return false; }
}
const sign = (exp) => crypto.createHmac("sha256", SESSION_SECRET).update(String(exp)).digest("hex");

export const configured = () => !!(ADMIN_USER_HASH && ADMIN_PASS_HASH && SESSION_SECRET);

// both are always checked, so a wrong username can't be told apart from a wrong password
export function checkLogin(user, pass) {
  const u = matches(user, ADMIN_USER_HASH), p = matches(pass, ADMIN_PASS_HASH);
  return u && p;
}

export async function startSession() {
  const exp = Math.floor(Date.now() / 1000) + WEEK;
  (await cookies()).set("s", `${exp}.${sign(exp)}`, { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", maxAge: WEEK });
}

export async function endSession() { (await cookies()).delete("s"); }

export async function isAdmin() {
  if (!configured()) return false;
  const m = /^(\d+)\.([0-9a-f]{64})$/.exec((await cookies()).get("s")?.value ?? "");
  if (!m || +m[1] < Date.now() / 1000) return false;
  return crypto.timingSafeEqual(Buffer.from(m[2]), Buffer.from(sign(m[1])));
}

// call at the top of every admin page and every admin action
export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/login");
}
