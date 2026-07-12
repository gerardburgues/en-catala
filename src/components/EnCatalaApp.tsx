"use client";

import { ArrowLeft, Check, Headphones, RotateCcw, Volume2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { levels } from "@/data/levels";
import { speakCatalan } from "@/lib/audio/speech";
import { getLevel } from "@/lib/lessons";
import { loadProgress, resetProgress, saveProgress, topicProgress, type CardStatus, type ProgressState } from "@/lib/progress";
import type { LevelId, Topic, VocabularyCard } from "@/types/lessons";
import { useSpeechVoices } from "@/hooks/useSpeechVoices";

type SessionMode = "all" | "missed";

type Session = {
  topic: Topic;
  cards: VocabularyCard[];
  index: number;
  revealed: boolean;
  mode: SessionMode;
  finished: boolean;
};

export function EnCatalaApp() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());
  const [session, setSession] = useState<Session | null>(null);
  const audio = useSpeechVoices();

  const activeLevel = progress.selectedLevel;
  const level = getLevel(activeLevel);
  const totals = useMemo(
    () => ({
      a1: levels.find((item) => item.level === "A1")?.topics.reduce((sum, topic) => sum + topic.cards.length, 0) ?? 0,
      a2: levels.find((item) => item.level === "A2")?.topics.reduce((sum, topic) => sum + topic.cards.length, 0) ?? 0
    }),
    []
  );

  function persist(next: ProgressState) {
    setProgress(next);
    saveProgress(next);
  }

  function chooseLevel(nextLevel: LevelId) {
    persist({ ...progress, selectedLevel: nextLevel });
  }

  function startTopic(topic: Topic, mode: SessionMode = "all") {
    const missed = topic.cards.filter((card) => progress.cardStatus[card.id] === "learning");
    const cards = mode === "missed" && missed.length > 0 ? missed : topic.cards;
    setSession({ topic, cards, index: 0, revealed: false, mode, finished: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function markCard(status: CardStatus) {
    if (!session) return;
    const card = session.cards[session.index];
    const nextProgress = {
      ...progress,
      cardStatus: { ...progress.cardStatus, [card.id]: status }
    };
    const isLast = session.index === session.cards.length - 1;
    if (isLast) {
      nextProgress.completedTopics = Array.from(new Set([...nextProgress.completedTopics, session.topic.id]));
    }
    persist(nextProgress);
    setSession({
      ...session,
      index: isLast ? session.index : session.index + 1,
      revealed: false,
      finished: isLast
    });
  }

  function currentResult(topic: Topic) {
    const ids = topic.cards.map((card) => card.id);
    return topicProgress(ids, progress);
  }

  if (session) {
    return (
      <StudySession
        session={session}
        setSession={setSession}
        markCard={markCard}
        startTopic={startTopic}
        result={currentResult(session.topic)}
        audio={audio}
      />
    );
  }

  return (
    <main>
      <section className="hero">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#top" aria-label="En catala home">
            <span>CA</span>
            <strong>En català</strong>
          </a>
          <div className="navlinks">
            <a href="#levels">Levels</a>
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/install">Install</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Completely free · No account needed</p>
            <h1>Learn the Catalan you’ll actually use.</h1>
            <p className="lede">
              Catalan flashcards with pronunciation, everyday vocabulary, useful expressions, and examples from real life.
            </p>
            <div className="level-tabs" aria-label="Choose a level">
              {levels.map((item) => (
                <button
                  className={item.level === activeLevel ? "active" : ""}
                  key={item.level}
                  onClick={() => chooseLevel(item.level)}
                  type="button"
                >
                  {item.level}
                  <span>{item.level === "A1" ? totals.a1 : totals.a2} cards</span>
                </button>
              ))}
            </div>
          </div>
          <div className="phone-preview" aria-label="Flashcard preview">
            <div className="preview-card">
              <span className="mini-progress">3 / {totals.a1}</span>
              <h2>Bon dia</h2>
              <p>Tap to reveal the meaning</p>
              <button type="button"><Volume2 size={18} /> Listen</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="levels">
        <div className="section-heading">
          <p className="eyebrow">{level.level} · {level.blurb}</p>
          <h2>{level.level} topics</h2>
        </div>
        <div className="topic-grid">
          {level.topics.map((topic) => {
            const stats = currentResult(topic);
            const percent = Math.round((stats.known / stats.total) * 100);
            return (
              <article className="topic-card" key={topic.id}>
                <div className="topic-title">
                  <span aria-hidden>{topic.emoji}</span>
                  <div>
                    <h3>{topic.name}</h3>
                    <p>{topic.description}</p>
                  </div>
                </div>
                <div className="meter" aria-label={`${percent}% known`}>
                  <span style={{ width: `${percent}%` }} />
                </div>
                <p className="topic-meta">
                  {topic.cards.length} cards · {stats.known} known · {stats.learning} still learning
                </p>
                <div className="topic-actions">
                  <button type="button" onClick={() => startTopic(topic)}>Start</button>
                  <button type="button" onClick={() => startTopic(topic, "missed")} disabled={stats.learning === 0}>
                    Review missed
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <InfoSections
        progress={progress}
        onReset={() => {
          const next = resetProgress();
          setProgress(next);
        }}
      />
    </main>
  );
}

function StudySession({
  session,
  setSession,
  markCard,
  startTopic,
  result,
  audio
}: {
  session: Session;
  setSession: (session: Session | null) => void;
  markCard: (status: CardStatus) => void;
  startTopic: (topic: Topic, mode?: SessionMode) => void;
  result: { known: number; learning: number; total: number };
  audio: { supported: boolean; hasCatalanVoice: boolean; voiceName?: string };
}) {
  const [audioMessage, setAudioMessage] = useState("");
  const card = session.cards[session.index];
  const progressText = `${session.index + 1} / ${session.cards.length}`;
  const percent = Math.round(((session.index + (session.finished ? 1 : 0)) / session.cards.length) * 100);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (!session.finished && !session.revealed) setSession({ ...session, revealed: true });
      }
      if (event.key.toLowerCase() === "k" && session.revealed) markCard("known");
      if (event.key.toLowerCase() === "l" && session.revealed) markCard("learning");
      if (event.key === "Escape") setSession(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [markCard, session, setSession]);

  function play(rate: number) {
    const spoken = speakCatalan(card.ca, rate);
    setAudioMessage(spoken.ok ? "" : spoken.reason ?? "Audio is unavailable.");
  }

  if (session.finished) {
    const known = result.known;
    const learning = result.learning;
    const score = Math.round((known / result.total) * 100);
    return (
      <main className="study-wrap">
        <section className="result-panel" aria-live="polite">
          <p className="eyebrow">{session.topic.emoji} {session.topic.name}</p>
          <h1>Session complete</h1>
          <p className="lede">{score}% known across this topic.</p>
          <div className="result-grid">
            <strong>{known}<span>I knew it</span></strong>
            <strong>{learning}<span>Still learning</span></strong>
            <strong>{result.total}<span>Total cards</span></strong>
          </div>
          <div className="result-actions">
            <button type="button" onClick={() => startTopic(session.topic, "missed")} disabled={learning === 0}>
              Practise missed cards
            </button>
            <button type="button" onClick={() => startTopic(session.topic)}>
              <RotateCcw size={18} /> Restart topic
            </button>
            <button type="button" onClick={() => setSession(null)}>
              Return to topics
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="study-wrap">
      <section className="study-shell">
        <div className="study-top">
          <button type="button" className="icon-button" onClick={() => setSession(null)} aria-label="Return to topics">
            <ArrowLeft size={20} />
          </button>
          <div>
            <p>{session.topic.emoji} {session.topic.name}</p>
            <span>{session.mode === "missed" ? "Missed-card review" : "Full topic"}</span>
          </div>
          <strong>{progressText}</strong>
        </div>
        <div className="meter tall" aria-label={`${percent}% through session`}>
          <span style={{ width: `${percent}%` }} />
        </div>

        <article className="flashcard">
          <p className="eyebrow">Catalan</p>
          <h1>{card.ca}</h1>
          <div className="audio-row">
            <button type="button" onClick={() => play(0.92)} disabled={!audio.hasCatalanVoice}>
              <Headphones size={18} /> Normal
            </button>
            <button type="button" onClick={() => play(0.7)} disabled={!audio.hasCatalanVoice}>
              <Volume2 size={18} /> Slower
            </button>
          </div>
          {!audio.hasCatalanVoice && (
            <p className="audio-note">{audio.supported ? "Install or enable a Catalan voice to hear pronunciation." : "Speech synthesis is unavailable in this browser."}</p>
          )}
          {audioMessage ? <p className="audio-note">{audioMessage}</p> : null}

          {!session.revealed ? (
            <button className="reveal" type="button" onClick={() => setSession({ ...session, revealed: true })}>
              Reveal meaning
            </button>
          ) : (
            <div className="revealed">
              <dl>
                <div>
                  <dt>Meaning</dt>
                  <dd>{card.en}</dd>
                </div>
                <div>
                  <dt>In everyday use</dt>
                  <dd>{card.ex}</dd>
                </div>
                <div>
                  <dt>Example translation</dt>
                  <dd>{card.exEn}</dd>
                </div>
                <div>
                  <dt>Learning notes</dt>
                  <dd>{card.hint}</dd>
                </div>
              </dl>
              <div className="grade-row">
                <button type="button" onClick={() => markCard("learning")}>
                  <X size={18} /> Still learning
                </button>
                <button type="button" onClick={() => markCard("known")}>
                  <Check size={18} /> I knew it
                </button>
              </div>
            </div>
          )}
        </article>

        <div className="step-row">
          <button
            type="button"
            onClick={() => setSession({ ...session, index: Math.max(0, session.index - 1), revealed: false })}
            disabled={session.index === 0}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setSession({ ...session, index: Math.min(session.cards.length - 1, session.index + 1), revealed: false })}
            disabled={session.index === session.cards.length - 1}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

function InfoSections({ progress, onReset }: { progress: ProgressState; onReset: () => void }) {
  const touched = Object.keys(progress.cardStatus).length;
  return (
    <>
      <section className="reset-band">
        <p>{touched} cards have saved progress on this device.</p>
        <button type="button" onClick={onReset}>Reset progress</button>
      </section>
      <footer>
        <nav aria-label="Footer">
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/install">Install</a>
        </nav>
        <p>© 2026 En català. Inspired by popolsku.app; no affiliation or endorsement.</p>
      </footer>
    </>
  );
}
