// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync } from "node:fs";
import { normalizeBasePath, staticPagePaths } from "./scripts/github-pages-config";

const githubPages = process.env['GITHUB_PAGES'] === "true";
const base = githubPages ? normalizeBasePath(process.env['VITE_SITE_BASE']) : "/";

export default defineConfig({
  // GitHub serves only dist/client; the server build is used to prerender pages.
  ...(githubPages ? { nitro: false, vite: { base } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(githubPages ? {
      router: { basepath: base },
      pages: staticPagePaths(readFileSync(new URL("./src/lib/services.ts", import.meta.url), "utf8")).map((path) => ({ path })),
      prerender: { enabled: true, autoStaticPathsDiscovery: false, crawlLinks: false, autoSubfolderIndex: true, failOnError: true },
      sitemap: { enabled: false },
    } : {}),
  },
});
