## Corey Damocles Portfolio: [Visit My Portfolio Here](https://coreydamocles.vercel.app/)

This is the second version of my portfolio, showcasing my most-recent projects and contact information, developed using SvelteKit 2.0.

## How It's Made:

**Tech used:**

Svelte/SvelteKit, GitHub API

## Run Locally

Using pnpm:

Install dependencies

```
$ pnpm i
```

Start development server

```
$ pnpm run dev
```

## Things to Add:

Create a `.env` file at the root directory and enter your GitHub API key:

```
VITE_GITHUB_TOKEN=[ENTER GITHUB KEY HERE]
```

## Lessons Learned:

- Utilizing the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) for click-scrolling events.
- Better understanding of using a class-based CSS design system, and using POSTCSS.
- Better understanding of SvelteKit and grabbing data from an API using +page.server.ts (server-side).
- Better understanding of auto-importing components.
