import Link from "next/link";

export const metadata = {
  title: "Install · En català",
  description: "Install En català as a progressive web app."
};

export default function InstallPage() {
  return (
    <main className="content-page">
      <PageNav />
      <article className="content-panel">
        <p className="eyebrow">Install</p>
        <h1>Works as an installable app</h1>
        <p>
          On iPhone, open the Share menu and choose Add to Home Screen. On Android or desktop Chrome, use Install from
          the browser menu when it appears.
        </p>
        <p>
          Lessons are cached after a successful first load, so the app shell and lesson data can open offline.
          Pronunciation still depends on the device’s installed Catalan voices and browser support.
        </p>
        <p>
          If audio is unavailable, the flashcards still work normally. You can replace browser speech with recorded
          native audio files later without changing the lesson structure.
        </p>
      </article>
    </main>
  );
}

function PageNav() {
  return (
    <nav className="page-nav" aria-label="Page">
      <Link className="brand" href="/">
        <span>CA</span>
        <strong>En català</strong>
      </Link>
      <div className="navlinks visible">
        <Link href="/">Lessons</Link>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </nav>
  );
}
