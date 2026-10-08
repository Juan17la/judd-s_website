// Cloudflare bindings: DB (D1, schema in schema.sql). Also works under `next dev` via initOpenNextCloudflareForDev.
import { getCloudflareContext } from "@opennextjs/cloudflare";

const env = async () => (await getCloudflareContext({ async: true })).env;

export const all = async (sql, ...args) => (await (await env()).DB.prepare(sql).bind(...args).all()).results;
export const first = async (sql, ...args) => (await env()).DB.prepare(sql).bind(...args).first();
export const run = async (sql, ...args) => (await env()).DB.prepare(sql).bind(...args).run();
