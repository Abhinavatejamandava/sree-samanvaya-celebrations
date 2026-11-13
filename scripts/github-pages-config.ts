// Shared, browser-safe rules for GitHub's repository-site URL.
export function normalizeBasePath(value = "/") {
  return `/${value.split("/").filter(Boolean).join("/")}${value.split("/").filter(Boolean).length ? "/" : ""}`;
}

export function staticPagePaths(servicesSource: string) {
  const slugs = [...servicesSource.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((match) => match[1]);
  return ["/", "/about", "/services", "/gallery", "/packages", "/contact", ...slugs.map((slug) => `/services/${slug}`)];
}