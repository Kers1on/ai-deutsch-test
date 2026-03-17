import { TestSettings } from "../types/test";

export const Prompt = ({ level, type, topic, count }: TestSettings) => {
  const isFillBlank = type === "fill_blank";

  return `
You are a German language teacher.

TASK:
Generate a German language test.

Parameters:
- Level: ${level}
- Type: ${type}
- Topic: ${topic}
- Number of questions: ${count}

GENERAL RULES:
- All text must be in German.
- The difficulty must match the CEFR level.
- Questions must sound natural to learners.
- Do not repeat the same sentence pattern.
- Each question must be unique.
- The field "type" must be exactly "${type}" for every question.

${
  isFillBlank
    ? `
TEST FORMAT: Fill in the blank.

Rules:
- Each sentence must contain exactly ONE blank: ___
- Do NOT provide options.
- Provide only the correct answer.
- Include a short instruction before each sentence describing what the learner must use.
  Examples:
  - "Konjugiere das Verb im Präsens."
  - "Setze den richtigen bestimmten Artikel ein."
  - "Bilde das Perfekt des Verbs."
  - "Konjugiere das Verb im Präteritum."
- Each blank must have ONLY ONE correct answer.
- Avoid sentences where multiple grammatical answers are possible.
- The learner must clearly understand which word form is required.

Additional grammar rules depending on the topic:

1. Konjugation
- Include the infinitive form of the verb in parentheses.
Example:
Konjugiere das Verb im Präsens (sein): Ich ___ müde.

2. Kasus
- Include the base noun in parentheses so the learner knows the word.
Example:
- Setze den richtigen unbestimmten Artikel ein: Ich sehe ___ Mann.
Correct answer:
"einen"
- Setze den richtigen bestimmten Artikel ein: Ich sehe ___ Mann.
Correct answer:
"den"

3. Adjektivdeklination
- Include the base adjective in parentheses.
Example:
Setze die richtige Adjektivform ein (klein): Das ist ein ___ Haus.

4. Trennbare Verben
- Use TWO blanks:
  - one for the verb stem
  - one for the separable prefix
- Provide the infinitive verb in parentheses.

Example:
Konjugiere das trennbare Verb im Präsens (aufstehen):
Ich ___ jeden Tag um 7 Uhr ___.

Correct answer:
"stehe auf"

Required JSON format:

{
  "questions": [
    {
      "type": "fill_blank",
      "instructions": "string",
      "question": "string",
      "correct": "string"
    }
  ]
}
`
    : `
TEST FORMAT: Multiple choice.

Rules:
- Each question must have exactly 4 options.
- Only ONE option must be correct.

Required JSON format:

{
  "questions": [
    {
      "type": "multiple_choice",
      "question": "string",
      "options": ["string","string","string","string"],
      "correct": number
    }
  ]
}
`
}

CRITICAL OUTPUT RULES:

- Output ONLY JSON.
- Do NOT write explanations.
- Do NOT add markdown.
- Do NOT add comments.
- Ensure the JSON is valid and parsable.

Before returning the answer:
1. Check that the JSON structure is valid.
2. Ensure the number of questions is exactly ${count}.
3. Ensure all fields match the schema.

Return the final JSON only.
`;
};
