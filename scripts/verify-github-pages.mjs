import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const output = "dist/client";
const source = await readFile("src/lib/services.ts", "utf8");
const paths = ["/", "/about", "/services", "/gallery", "/packages", "/contact", ...[...source.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((match) => `/services/${match[1]}`)];
for (const route of paths) {
  const document = path.join(output, route, "index.html");
  const html = await readFile(document, "utf8");
  if (!html.includes("<title>") || !html.includes("Sree Samanvaya")) throw new Error(`Missing page content: ${document}`);
}
async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await check(file);
    else if (/\.(html|js|json)$/.test(entry.name)) {
      const content = await readFile(file, "utf8");
      if (/['"]\/__l5e\/assets-v1\//.test(content)) throw new Error(`Unexported media in ${file}`);
    }
  }
}
await access(path.join(output, ".nojekyll"));
await check(output);
console.log(`Verified ${paths.length} static pages and exported media.`);