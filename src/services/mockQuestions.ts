import { QuestionMCType, QuestionFBType, QuestionType } from "../types/test";

const mockQuestionsMC: QuestionMCType[] = [
  {
    type: "multiple_choice",
    question: "Ich ___ jeden Tag Deutsch.",
    options: ["lerne", "lernst", "lernt", "lernen"],
    correct: 0,
  },
  {
    type: "multiple_choice",
    question: "___ Katze schläft auf dem Sofa.",
    options: ["Der", "Die", "Das", "Ein"],
    correct: 1,
  },
  {
    type: "multiple_choice",
    question: "Ich ___ gestern ins Kino gegangen.",
    options: ["bin", "habe", "war", "ist"],
    correct: 0,
  },
  {
    type: "multiple_choice",
    question: "Ich warte ___ dich.",
    options: ["auf", "für", "mit", "an"],
    correct: 0,
  },
  {
    type: "multiple_choice",
    question: "Heute ___ ich ins Büro.",
    options: ["gehe", "geht", "gehst", "gehen"],
    correct: 0,
  },
];

const mockQuestionsFB: QuestionFBType[] = [
  {
    type: "fill_blank",
    instructions: "Setze das Verb im Präsens ein",
    question: "Wir ___ Deutsch.",
    correct: "lernen",
  },
  {
    type: "fill_blank",
    instructions: "Setze den richtigen unbestimmten Artikel ein",
    question: "Ich habe ___ Hund.",
    correct: "einen",
  },
  {
    type: "fill_blank",
    instructions: "Setze das Verb im Perfekt ein",
    question: "Er ___ ein Buch gelesen.",
    correct: "hat",
  },
  {
    type: "fill_blank",
    instructions: "Setze den richtigen bestimmten Artikel ein",
    question: "___ Auto ist neu.",
    correct: "Das",
  },
  {
    type: "fill_blank",
    instructions: "Setze das Verb im Präteritum ein",
    question: "Ich ___ gestern müde.",
    correct: "war",
  },
];

export const mockQuestions = (
  type: "multiple_choice" | "fill_blank",
): QuestionType[] => {
  if (type === "multiple_choice") {
    return mockQuestionsMC;
  } else {
    return mockQuestionsFB;
  }
};
