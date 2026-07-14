export type Language = "zh" | "en";

export type LocalizedText = Record<Language, string>;

export type LocalizedList = Record<Language, string[]>;

export const localize = (value: LocalizedText, language: Language) =>
  value[language];

export const localizeList = (value: LocalizedList, language: Language) =>
  value[language];
