export default {
  serverExternalPackages: ["better-sqlite3"],
  experimental: { serverActions: { bodySizeLimit: "9mb" } }, // gallery uploads are capped at 8 MB in lib/actions.js
};
