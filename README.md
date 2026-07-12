# En català

Learn practical A1 and A2 Catalan vocabulary with mobile-first flashcards, pronunciation, local progress, and no account.

Screenshot placeholder: add a production screenshot after final visual review.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static lesson data
- Vitest and Testing Library
- Browser Speech Synthesis API
- PWA manifest and service worker

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Commands

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Lesson Data

Lesson data lives in `src/data/levels.ts` and follows:

```ts
type VocabularyCard = {
  id: string;
  ca: string;
  en: string;
  hint: string;
  ex: string;
  exEn: string;
};
```

Every level, topic, and card has a stable ID. Progress uses card IDs, so keep IDs stable when editing existing cards.

## Editing Vocabulary

Edit `src/data/levels.ts`, then run:

```bash
npm test
npm run typecheck
```

The lesson validation test checks required fields, unique IDs, A1/A2-only levels, and obvious leftover Polish source strings.

## Progress

Progress is stored only in browser `localStorage` under `en-catala-progress-v1`. The app stores the selected level, completed topics, and per-card known/still-learning status. The learner can reset progress from the page.

## Audio

Pronunciation uses the browser Speech Synthesis API. The app prefers `ca-ES`, then any voice whose language starts with `ca`. If no Catalan voice is installed, audio buttons are disabled and the UI explains the limitation.

## PWA Behavior

The app includes a web manifest, SVG app icon, theme color, standalone display mode, and a service worker that caches the application shell and loaded static assets. Speech may still depend on device voices and browser support.

## Deployment

Deploy to Vercel with the default Next.js settings:

```bash
vercel
vercel --prod
```

Production should be connected to the `main` branch. Feature branches and pull requests can use Vercel previews.

## Privacy

En català has no user accounts, email collection, analytics, marketing cookies, ads, backend, or database. Learning progress remains in local browser storage. Hosting providers may keep ordinary technical server logs.

## Attribution

The interaction concept was inspired by popolsku.app. This project uses original branding, implementation, and lesson content and is not affiliated with or endorsed by popolsku.app.
