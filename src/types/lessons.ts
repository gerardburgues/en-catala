export type LevelId = "A1" | "A2";

export type VocabularyCard = {
  id: string;
  ca: string;
  en: string;
  hint: string;
  ex: string;
  exEn: string;
};

export type Topic = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  cards: VocabularyCard[];
};

export type Level = {
  level: LevelId;
  blurb: string;
  topics: Topic[];
};
