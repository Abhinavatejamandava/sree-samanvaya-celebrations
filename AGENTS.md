<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->
- Service content lives in src/lib/services.ts and drives /services/$slug pages; add services there, not as new route files. Why: one template keeps every service page consistent.
- Shared editorial styling and responsive wordmark rules live in src/styles.css; the logo name is rendered as text in Logo.tsx so it stays crisp at every size.
- Tailored event steps and meal suggestions live in src/lib/service-experiences.ts and render through the shared service page; this keeps every event's journey consistent without duplicating page templates.
- ServiceScene renders each service's dedicated video with viewport-aware playback and reduced-motion support; this gives service pages inspectable motion without repeating generic footage.
- Service process steps and market estimates live in src/lib/service-process.ts; process videos are auto-picked from src/assets/videos/process/<slug>-process.mp4.asset.json so adding a pointer is enough.
- GitHub Pages uses a build-only static prerender with a repository base path and exported CDN videos; this supports direct links without a running server.
- Static-host enquiries use validated email drafts and never claim delivery; GitHub Pages cannot execute the existing server function.
