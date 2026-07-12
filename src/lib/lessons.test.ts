import { describe, expect, it } from "vitest";
import { levels } from "@/data/levels";
import { countCards, getLevel, getTopic, validateLessons } from "@/lib/lessons";

describe("lesson data", () => {
  it("contains only valid A1 and A2 levels", () => {
    expect(levels.map((level) => level.level)).toEqual(["A1", "A2"]);
    expect(countCards("A1")).toBe(124);
    expect(countCards("A2")).toBe(418);
  });

  it("passes structural and leftover-content validation", () => {
    expect(validateLessons()).toEqual([]);
  });

  it("opens a level and topic", () => {
    const level = getLevel("A2");
    expect(level.level).toBe("A2");
    expect(getTopic("A2", "a2-public-transport")?.cards.length).toBe(23);
  });
});
