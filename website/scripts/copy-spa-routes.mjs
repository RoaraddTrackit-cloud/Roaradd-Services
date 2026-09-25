import { copyFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "public");
const index = join(root, "index.html");
if (!existsSync(index)) {
  console.error("index.html missing after build");
  process.exit(1);
}

copyFileSync(index, join(root, "404.html"));

const routes = [
  "photonic-cpo",
  "products/photonic-cpo",
  "trackit",
  "farm",
  "pharmatrade",
  "aip",
  "services/aip",
  "services/it-consulting",
  "about",
  "team",
  "contact",
  "ideas",
  "ideas/solareye",
  "ideas/polehive",
  "blog",
  "blog/ai-to-ai-transactions",
  "blog/farm-iot-notes",
  "blog/human-in-the-loop",
  "case-studies",
  "whitepapers",
  "privacy",
  "terms",
  "careers",
  "docs",
  "documentation",
  "changelog",
  "solutions/ai-infrastructure",
  "solutions/agriculture",
  "solutions/enterprise-ops",
  "solutions/ai-agents",
  "solutions/it-modernization",
];

for (const route of routes) {
  const dest = join(root, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(index, dest);
}

console.log(`Copied SPA index to ${routes.length} routes + 404.html`);
