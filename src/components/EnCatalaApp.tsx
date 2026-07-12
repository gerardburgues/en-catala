"use client";

import { ArrowLeft, Check, ChevronRight, Clock3, Headphones, Home, RotateCcw, Search, Tag, UserRound, Volume2, X } from "lucide-react";
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
  const [query, setQuery] = useState("");
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

  const filteredTopics = level.topics.filter((topic) => {
    const text = `${topic.name} ${topic.description}`.toLowerCase();
    return text.includes(query.trim().toLowerCase());
  });

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
    <main className="app-home">
      <section className="hero">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#top" aria-label="En catala home">
            <LogoMark />
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
            <h1>Learn the Catalan you’ll actually use.</h1>
            <p className="lede">
              Catalan flashcards with pronunciation, everyday vocabulary, useful expressions, and examples from real life.
            </p>
            <div className="trust-pills" aria-label="Highlights">
              <span><Tag size={15} /> Completely free</span>
              <span><UserRound size={15} /> No account needed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="levels">
        <div className="control-group">
          <p className="eyebrow">Vocabulary by level</p>
          <div className="level-tabs" aria-label="Choose a level">
            {levels.map((item) => (
              <button
                className={item.level === activeLevel ? "active" : ""}
                key={item.level}
                onClick={() => chooseLevel(item.level)}
                type="button"
              >
                {item.level}
                <span>{item.level === "A1" ? totals.a1 : totals.a2}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="section-heading">
          <p className="eyebrow">Topics</p>
          <label className="topic-search">
            <Search size={20} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search topics - e.g. food, home"
              type="search"
            />
          </label>
        </div>
        <div className="topic-grid">
          {filteredTopics.map((topic) => {
            const stats = currentResult(topic);
            const percent = Math.round((stats.known / stats.total) * 100);
            return (
              <article className="topic-card" key={topic.id}>
                <button className="topic-main" onClick={() => startTopic(topic)} type="button">
                  <div className="topic-title">
                    <span aria-hidden>{topic.emoji}</span>
                    <div>
                      <h3>{topic.name}</h3>
                      <p>{topic.description}</p>
                      <small><b>{level.level}</b> {topic.cards.length} cards</small>
                    </div>
                  </div>
                  <ChevronRight className="topic-chevron" size={20} />
                  <span className="topic-progress" aria-label={`${percent}% known`} style={{ width: `${percent}%` }} />
                </button>
                {stats.learning > 0 ? (
                  <button
                    className="review-chip"
                    onClick={(event) => {
                      event.stopPropagation();
                      startTopic(topic, "missed");
                    }}
                    type="button"
                  >
                    Review {stats.learning}
                  </button>
                ) : null}
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
  const previewHint = card.hint.split(" Meaning:")[0];

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (!session.finished) setSession({ ...session, revealed: !session.revealed });
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
            <span>{session.mode === "missed" ? "Missed-card review" : `${session.topic.cards.length} cards`}</span>
          </div>
          <button className="slow-button" type="button" onClick={() => play(0.7)} disabled={!audio.hasCatalanVoice}>
            <Clock3 size={15} /> Slow
          </button>
          <button type="button" className="icon-button" onClick={() => setSession(null)} aria-label="Back to home">
            <Home size={20} />
          </button>
        </div>
        <div className="study-progress-row">
          <div className="meter tall" aria-label={`${percent}% through session`}>
            <span style={{ width: `${percent}%` }} />
          </div>
          <strong>{progressText}</strong>
        </div>

        <div className={`flashcard ${session.revealed ? "is-revealed" : ""}`}>
          <button
            className="flip-hit-area"
            type="button"
            onClick={() => setSession({ ...session, revealed: !session.revealed })}
            aria-label={session.revealed ? "Flip card back to Catalan" : "Flip card to reveal meaning"}
          >
            <span className="flashcard-inner">
              <span className="flashcard-face flashcard-front">
                <span className="eyebrow">Catalan</span>
                <span className="card-term">{card.ca}</span>
                <span className="card-hint">{previewHint}</span>
                <span className="tap-prompt">tap to see meaning</span>
              </span>
              <span className="flashcard-face flashcard-back">
                <span className="eyebrow">Meaning</span>
                <span className="card-term">{card.ca}</span>
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
                <span className="flip-back-prompt">tap card to flip back</span>
              </span>
            </span>
          </button>
          <button
            className="audio-fab"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              play(0.92);
            }}
            disabled={!audio.hasCatalanVoice}
            aria-label="Play Catalan pronunciation"
          >
            <Volume2 size={22} />
          </button>
        </div>
        {!audio.hasCatalanVoice && (
          <p className="audio-note">{audio.supported ? "Install or enable a Catalan voice to hear pronunciation." : "Speech synthesis is unavailable in this browser."}</p>
        )}
        {audioMessage ? <p className="audio-note">{audioMessage}</p> : null}

        {session.revealed ? (
          <div className="grade-row">
            <button type="button" onClick={() => markCard("learning")}>
              <X size={18} /> Still learning
            </button>
            <button type="button" onClick={() => markCard("known")}>
              <Check size={18} /> I knew it
            </button>
          </div>
        ) : null}

        <div className="step-row">
          <button
            type="button"
            onClick={() => setSession({ ...session, index: Math.max(0, session.index - 1), revealed: false })}
            disabled={session.index === 0}
          >
            <ArrowLeft size={18} /> Prev
          </button>
          <button type="button" className="shuffle-button" onClick={() => setSession({ ...session, revealed: !session.revealed })}>
            <Headphones size={18} />
          </button>
          <button
            type="button"
            onClick={() => setSession({ ...session, index: Math.min(session.cards.length - 1, session.index + 1), revealed: false })}
            disabled={session.index === session.cards.length - 1}
          >
            Next <ChevronRight size={18} />
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

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img">
        <rect className="logo-bg" x="4" y="4" width="40" height="40" rx="12" />
        <path className="logo-tail" d="M17 36 12 43l10-4" />
        <path className="logo-stripe" d="M13 17h22" />
        <path className="logo-stripe" d="M13 24h22" />
        <path className="logo-stripe" d="M13 31h22" />
        <path className="logo-spark" d="M31 10 38 8l-4 6" />
      </svg>
    </span>
  );
}
