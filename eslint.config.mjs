import next from "eslint-config-next/core-web-vitals";

const config = [...next, { ignores: [".next/", ".open-next/", ".wrangler/","node_modules/", "data/", "old/"] }];
export default config;
