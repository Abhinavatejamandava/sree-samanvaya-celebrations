import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { SERVICES } from "@/lib/services";
import { normalizeBasePath, staticPagePaths } from "../../scripts/github-pages-config";
import { requestEmailUrl } from "@/lib/request-email";

describe("GitHub Pages hosting", () => {
  it("keeps the supplied repository URL as the base path", () => {
    expect(normalizeBasePath("sree-samanvaya-celebrations")).toBe("/sree-samanvaya-celebrations/");
    expect(normalizeBasePath("/")).toBe("/");
  });
  it("matches home and every service under the repository URL", () => {
    const router = createRouter({ routeTree, basepath: "/sree-samanvaya-celebrations/", history: createMemoryHistory({ initialEntries: ["/sree-samanvaya-celebrations/"] }), context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(router.state.location.pathname).at(-1)?.routeId).toBe("/");
    for (const service of SERVICES) {
      router.history.push(`/sree-samanvaya-celebrations/services/${service.slug}`);
      const location = router.parseLocation(router.history.location);
      expect(router.matchRoutes(location.pathname).at(-1)?.routeId).toBe("/services/$slug");
    }
  });
  it("exports every current public service page", () => {
    const paths = staticPagePaths(readFileSync("src/lib/services.ts", "utf8"));
    expect(paths).toHaveLength(21);
    for (const service of SERVICES) expect(paths).toContain(`/services/${service.slug}`);
  });
  it("addresses requests to the business and includes all visitor details", () => {
    const url = requestEmailUrl({ service: "Haldi Ceremony Decor", name: "Asha", email: "asha@example.com", phone: "+1 845 309 9344", eventDate: "2027-05-01", location: "New York", guests: "80", budget: "$1,000", message: "Music & flowers\nCatering too" });
    expect(url.split("?")[0]).toBe("mailto:celebrate@sreesamanvaya.com");
    const query = new URLSearchParams(url.split("?")[1]);
    expect(query.get("subject")).toBe("Service request — Haldi Ceremony Decor");
    expect(query.get("body")).toBe("Service: Haldi Ceremony Decor\nName: Asha\nEmail: asha@example.com\nPhone: +1 845 309 9344\nEvent date: 2027-05-01\nLocation: New York\nGuests: 80\nBudget: $1,000\n\nMusic & flowers\nCatering too");
  });
});