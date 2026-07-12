import Link from "next/link";

export const metadata = {
  title: "Privacy · En català",
  description: "Privacy information for En català."
};

export default function PrivacyPage() {
  return (
    <main className="content-page">
      <PageNav />
      <article className="content-panel">
        <p className="eyebrow">Privacy</p>
        <h1>No accounts, no tracking</h1>
        <p>
          En català does not collect email addresses, create user accounts, set marketing cookies, run analytics, show
          advertising, or use session replay.
        </p>
        <p>
          Learning progress stays in this browser’s local storage. You can reset it from the lessons page at any time.
        </p>
        <p>
          The app is hosted on Vercel. Like most hosting providers, Vercel may retain ordinary technical server logs for
          security and operations.
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
        <Link href="/install">Install</Link>
      </div>
    </nav>
  );
}
