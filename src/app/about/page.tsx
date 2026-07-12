import Link from "next/link";

export const metadata = {
  title: "About · En català",
  description: "About En català, a free A1 and A2 Catalan vocabulary flashcard app."
};

export default function AboutPage() {
  return (
    <main className="content-page">
      <PageNav />
      <article className="content-panel">
        <p className="eyebrow">About</p>
        <h1>Simple flashcards for A1 and A2 Catalan</h1>
        <p>
          En català focuses on useful Central Catalan for Catalonia: greetings, cafes, transport, paperwork, housing,
          health, food, work, weather and everyday conversation.
        </p>
        <p>
          The course is intentionally small and direct: choose a level, pick a topic, reveal each card, and mark what you
          know or still need to practise.
        </p>
        <p>
          The interaction concept was inspired by popolsku.app. En català uses original branding, implementation, and
          Catalan lesson content, and is not affiliated with or endorsed by popolsku.app.
        </p>
      </article>
    </main>
  );
}

function PageNav() {
  return (
    <nav className="page-nav" aria-label="Page">
      <Link className="brand" href="/">
        <span className="logo-mark text-logo">CA</span>
        <strong>En català</strong>
      </Link>
      <div className="navlinks visible">
        <Link href="/">Lessons</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/install">Install</Link>
      </div>
    </nav>
  );
}
