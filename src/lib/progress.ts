import type { LevelId } from "@/types/lessons";

export type CardStatus = "known" | "learning";

export type ProgressState = {
  selectedLevel: LevelId;
  completedTopics: string[];
  cardStatus: Record<string, CardStatus>;
};

const key = "en-catala-progress-v1";

const initialState: ProgressState = {
  selectedLevel: "A1",
  completedTopics: [],
  cardStatus: {}
};

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      selectedLevel: parsed.selectedLevel === "A2" ? "A2" : "A1",
      completedTopics: Array.isArray(parsed.completedTopics) ? parsed.completedTopics : [],
      cardStatus: parsed.cardStatus && typeof parsed.cardStatus === "object" ? parsed.cardStatus : {}
    };
  } catch {
    return initialState;
  }
}

export function saveProgress(progress: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(progress));
}

export function resetProgress() {
  if (typeof window === "undefined") return initialState;
  window.localStorage.removeItem(key);
  return initialState;
}

export function topicProgress(cardIds: string[], progress: ProgressState) {
  const known = cardIds.filter((id) => progress.cardStatus[id] === "known").length;
  const learning = cardIds.filter((id) => progress.cardStatus[id] === "learning").length;
  return { known, learning, touched: known + learning, total: cardIds.length };
}
