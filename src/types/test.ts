export type TestSettings = {
  level: string;
  type: string;
  topic: string;
  count: number;
};

export type QuestionMCType = {
  type: "multiple_choice";
  question: string;
  options: string[];
  correct: number;
};

export type QuestionFBType = {
  type: "fill_blank";
  instructions: string;
  question: string;
  correct: string;
};

export type QuestionType = QuestionMCType | QuestionFBType;
