import { beforeEach, describe, expect, it } from "vitest";
import { loadProgress, resetProgress, saveProgress, topicProgress } from "@/lib/progress";

describe("local progress", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("persists and resets progress", () => {
    saveProgress({
      selectedLevel: "A2",
      completedTopics: ["a2-public-transport"],
      cardStatus: { one: "known", two: "learning" }
    });

    expect(loadProgress()).toEqual({
      selectedLevel: "A2",
      completedTopics: ["a2-public-transport"],
      cardStatus: { one: "known", two: "learning" }
    });
    expect(topicProgress(["one", "two", "three"], loadProgress())).toEqual({ known: 1, learning: 1, touched: 2, total: 3 });
    expect(resetProgress()).toEqual({ selectedLevel: "A1", completedTopics: [], cardStatus: {} });
    expect(loadProgress().cardStatus).toEqual({});
  });
});
