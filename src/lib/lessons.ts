import { levels } from "@/data/levels";
import type { LevelId, Topic, VocabularyCard } from "@/types/lessons";

export function getLevel(levelId: LevelId) {
  return levels.find((level) => level.level === levelId) ?? levels[0];
}

export function getTopic(levelId: LevelId, topicId: string): Topic | undefined {
  return getLevel(levelId).topics.find((topic) => topic.id === topicId);
}

export function getCard(topic: Topic, cardId: string): VocabularyCard | undefined {
  return topic.cards.find((card) => card.id === cardId);
}

export function countCards(levelId?: LevelId) {
  const selected = levelId ? levels.filter((level) => level.level === levelId) : levels;
  return selected.reduce((sum, level) => sum + level.topics.reduce((topicSum, topic) => topicSum + topic.cards.length, 0), 0);
}

export function validateLessons() {
  const errors: string[] = [];
  const levelIds = new Set<string>();
  const topicIds = new Set<string>();
  const cardIds = new Set<string>();
  const blocked = /\b(pl:|Polish|Poland|po polsku|złoty|grosz|PESEL)\b/i;

  for (const level of levels) {
    const levelId = level.level as string;
    if (levelId !== "A1" && levelId !== "A2") errors.push(`Invalid level ${levelId}`);
    if (levelIds.has(level.level)) errors.push(`Duplicate level ${level.level}`);
    levelIds.add(level.level);
    if (!level.blurb.trim()) errors.push(`${level.level} has no blurb`);

    for (const topic of level.topics) {
      if (topicIds.has(topic.id)) errors.push(`Duplicate topic ${topic.id}`);
      topicIds.add(topic.id);
      for (const field of ["name", "emoji", "description"] as const) {
        if (!topic[field].trim()) errors.push(`${topic.id} has empty ${field}`);
      }
      for (const card of topic.cards) {
        if (cardIds.has(card.id)) errors.push(`Duplicate card ${card.id}`);
        cardIds.add(card.id);
        for (const field of ["ca", "en", "hint", "ex", "exEn"] as const) {
          const value = card[field];
          if (!value.trim()) errors.push(`${card.id} has empty ${field}`);
          if (blocked.test(value)) errors.push(`${card.id} has blocked text in ${field}: ${value}`);
        }
      }
    }
  }

  if (levelIds.size !== 2 || !levelIds.has("A1") || !levelIds.has("A2")) {
    errors.push("Only A1 and A2 must be enabled");
  }

  return errors;
}
