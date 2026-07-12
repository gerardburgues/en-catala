import Link from "next/link";
import { Check, Download, MonitorSmartphone, Share, Smartphone, WifiOff } from "lucide-react";

export const metadata = {
  title: "Install · En català",
  description: "Install En català as a progressive web app."
};

export default function InstallPage() {
  return (
    <main className="content-page">
      <PageNav />
      <section className="install-panel">
        <div className="install-hero">
          <p className="eyebrow">Install</p>
          <h1>Add En català to your home screen</h1>
          <p>
            Open it like a normal app, keep lessons on the device after the first successful load, and practise without
            creating an account.
          </p>
          <div className="install-badges" aria-label="Install benefits">
            <span><Check size={15} /> No app store</span>
            <span><WifiOff size={15} /> Offline lessons</span>
          </div>
        </div>

        <div className="install-card-grid">
          <article className="install-card">
            <div className="install-card-head">
              <span><Smartphone size={22} /></span>
              <h2>iPhone & iPad</h2>
            </div>
            <ol className="install-steps">
              <li><span>1</span>Open En català in Safari.</li>
              <li><span>2</span>Tap Share.</li>
              <li><span>3</span>Choose Add to Home Screen.</li>
              <li><span>4</span>Tap Add.</li>
            </ol>
          </article>

          <article className="install-card">
            <div className="install-card-head">
              <span><MonitorSmartphone size={22} /></span>
              <h2>Android & Chrome</h2>
            </div>
            <ol className="install-steps">
              <li><span>1</span>Open the site in Chrome.</li>
              <li><span>2</span>Tap the browser menu.</li>
              <li><span>3</span>Choose Install app or Add to Home screen.</li>
              <li><span>4</span>Confirm Install.</li>
            </ol>
          </article>
        </div>

        <aside className="install-note-panel" aria-label="Offline and audio notes">
          <div>
            <span className="note-icon"><Download size={20} /></span>
            <h2>Works offline after first load</h2>
            <p>
              The app shell and lesson data are cached in this browser. Progress stays on this device in local storage.
            </p>
          </div>
          <div>
            <span className="note-icon"><Share size={20} /></span>
            <h2>Audio uses device voices</h2>
            <p>
              Pronunciation depends on installed Catalan voices and browser support. Flashcards still work if speech is
              unavailable.
            </p>
          </div>
        </aside>
      </section>
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
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </nav>
  );
}
