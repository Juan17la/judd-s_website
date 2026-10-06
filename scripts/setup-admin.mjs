// npm run setup-admin
// Asks for a username and password (typed hidden, never printed or stored) and writes only their salted scrypt hashes
// plus a random session secret to .env.local. Restart the server afterwards. Re-run any time to change them.
import crypto from "node:crypto";
import fs from "node:fs";
import readline from "node:readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
let muted = false;
rl._writeToOutput = (s) => rl.output.write(muted ? "" : s);
const ask = (q) => new Promise((ok) => { process.stdout.write(q); muted = true; rl.question("", (a) => { muted = false; process.stdout.write("\n"); ok(a); }); });
const hash = (v) => { const salt = crypto.randomBytes(16); return `${salt.toString("hex")}:${crypto.scryptSync(v, salt, 32).toString("hex")}`; };

const user = (await ask("Admin username (min 3, hidden): ")).trim();
const pass = await ask("Admin password (min 12, hidden): ");
if (user.length < 3 || pass.length < 12 || pass !== (await ask("Repeat the password: "))) {
  console.log("Too short, or the passwords don't match. Nothing saved.");
  process.exit(1);
}
rl.close();

const keep = fs.existsSync(".env.local") ? fs.readFileSync(".env.local", "utf8").split("\n").filter((l) => l && !/^(ADMIN_USER_HASH|ADMIN_PASS_HASH|SESSION_SECRET)=/.test(l)) : [];
fs.writeFileSync(".env.local", [...keep, `ADMIN_USER_HASH=${hash(user)}`, `ADMIN_PASS_HASH=${hash(pass)}`, `SESSION_SECRET=${crypto.randomBytes(32).toString("hex")}`, ""].join("\n"), { mode: 0o600 });
console.log("Saved to .env.local (hashes only). Restart the server. Changing them logs out any open session.");
