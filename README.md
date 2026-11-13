# Sree Samanvaya Celebrations

## Host on your own server

The website can be built as a fully static package that works on any static hosting (cPanel, shared hosting, S3, Netlify, etc.):

```sh
GITHUB_PAGES=true VITE_GITHUB_PAGES=true VITE_SITE_BASE=/ node scripts/prepare-github-pages.mjs
GITHUB_PAGES=true VITE_GITHUB_PAGES=true VITE_SITE_BASE=/ bun run build
node scripts/verify-github-pages.mjs
```

Upload the contents of `dist/client` to your hosting's web root. All pages and videos are included; no server code runs. Enquiry forms prepare an email draft to **celebrate@sreesamanvaya.com** that the visitor sends from their own email app. If you host under a subfolder instead of the domain root, set `VITE_SITE_BASE=/your-subfolder/` before building.

## Host on GitHub Pages

The included `.github/workflows/github-pages.yml` builds and publishes the website, including all 15 service pages and their videos.

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Open **Actions → Publish website to GitHub Pages → Run workflow**, choosing `main`. Future pushes to `main` deploy automatically.
4. After the deployment succeeds, visit **https://abhinavatejamandava.github.io/sree-samanvaya-celebrations/**.

If the connected branch is not `main`, update the workflow's `push.branches` to that branch and run the workflow from it. GitHub Actions and Pages must be enabled for the repository; private-repository Pages availability depends on the GitHub plan.

### Enquiries on GitHub Pages

GitHub Pages does not run a server. The form validates the visitor's details and prepares an email addressed to **celebrate@sreesamanvaya.com**, including their service, contact details, date, location, guest count, budget and message. The visitor must send that email in their email app. The website does **not** claim the request was delivered or save it to the database in this mode. Automatic delivery would need a separately hosted form service.

### Videos and builds

Before building, the workflow downloads the existing video assets into its temporary checkout and changes that checkout's media links to repository-relative URLs. Only the finished `dist/client` website is deployed; the videos are not committed into Git. The workflow fails instead of publishing broken video links if a download is unavailable. `ASSET_SOURCE_ORIGIN` can be set on the video-export step to another accessible project origin if needed. GitHub serves the copied videos after deployment and does not require Lovable hosting to play them.

The workflow runs tests, prerenders every public page, verifies the output, and disables Jekyll processing. No private backend keys are needed for static hosting. The ordinary development preview remains unchanged.

based on these create a stunning website and create a logo as well based on indian traditions and it should animations and real ai videos for all these services when the users want any service they can send request about that service and the request is sent to celebrate@sreesamanvaya.com along with their details.

make sure every service has its own page and include best content, emotionally and inspirational for the users and they should be attracted to choose them.

all the designs should be responsive for all screen sizes including for the screens under 250px

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/951a2035-196e-4395-ac86-bd265fbe80cc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
