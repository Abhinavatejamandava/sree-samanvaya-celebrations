import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render } from "@testing-library/react";

const submit = vi.hoisted(() => vi.fn());
vi.mock("@tanstack/react-start", () => ({ useServerFn: () => submit }));
vi.mock("@/lib/requests.functions", () => ({ submitServiceRequest: vi.fn() }));

afterEach(() => { cleanup(); vi.unstubAllEnvs(); submit.mockClear(); });

describe("static enquiry submission", () => {
  it("prepares an addressed email with real form input without calling a missing server", async () => {
    vi.stubEnv("VITE_GITHUB_PAGES", "true");
    const { RequestForm } = await import("@/components/site/RequestForm");
    const view = render(<RequestForm service="Haldi Ceremony Decor" />);
    fireEvent.change(view.getByLabelText("Full name *"), { target: { value: "Asha" } });
    fireEvent.change(view.getByLabelText("Email *"), { target: { value: "asha@example.com" } });
    fireEvent.change(view.getByLabelText("Phone *"), { target: { value: "+1 845 309 9344" } });
    const form = view.container.querySelector("form");
    if (!form) throw new Error("Missing request form");
    fireEvent.submit(form);
    const link = view.container.querySelector<HTMLAnchorElement>('a[href^="mailto:"]');
    expect(link?.getAttribute("href")?.split("?")[0]).toBe("mailto:celebrate@sreesamanvaya.com");
    expect(new URLSearchParams(link?.getAttribute("href")?.split("?")[1]).get("body")).toContain("Email: asha@example.com");
    expect(submit).not.toHaveBeenCalled();
  });
});