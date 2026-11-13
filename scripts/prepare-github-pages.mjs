import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

// Runs only in GitHub Actions: copy CDN videos into the Pages artifact, not Git.
const origin = new URL(process.env.ASSET_SOURCE_ORIGIN || "https://id-preview--951a2035-196e-4395-ac86-bd265fbe80cc.lovable.app");
const base = `/${(process.env.VITE_SITE_BASE || "/").split("/").filter(Boolean).join("/")}/`.replace(/^\/\/$/, "/");

async function prepare(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await prepare(file);
    } else if (entry.name.endsWith(".asset.json")) {
      const pointer = JSON.parse(await readFile(file, "utf8"));
      if (!pointer.url?.startsWith("/__l5e/assets-v1/")) continue;
      const parts = pointer.url.slice("/__l5e/assets-v1/".length).split("/");
      if (parts.length !== 2 || parts.some((part) => !/^[a-zA-Z0-9_.-]+$/.test(part) || part === "..")) {
        throw new Error(`Invalid media path in ${file}`);
      }
      const relative = `media/${parts.join("/")}`;
      const destination = path.join("public", relative);
      await mkdir(path.dirname(destination), { recursive: true });
      const response = await fetch(new URL(pointer.url, origin), { signal: AbortSignal.timeout(120_000) });
      if (!response.ok || !response.headers.get("content-type")?.startsWith("video/")) {
        throw new Error(`Could not download video for ${file}: ${response.status}. Check ASSET_SOURCE_ORIGIN.`);
      }
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (pointer.size && bytes.length !== pointer.size) throw new Error(`Incomplete video: ${file}`);
      await writeFile(destination, bytes);
      // The CI checkout is disposable. Original pointers in Git remain unchanged.
      await writeFile(file, JSON.stringify({ ...pointer, url: `${base}${relative}` }, null, 2));
      console.log(`Included ${relative}`);
    }
  }
}

await prepare("src/assets");
await writeFile("public/.nojekyll", "");