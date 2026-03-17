import { useState } from "react";
import { QuestionType } from "../types/test";

type NavProps = {
  questions: QuestionType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav: React.FC<NavProps> = ({ questions, setQuestions, setLoading }) => {
  const [settings, setSettings] = useState({
    level: "a1",
    type: "multiple_choice",
    topic: "conjugation",
    count: 5,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: name === "count" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // To display a loading animation during task generation without clearing previous ones
      if (questions.length !== 0) {
        setQuestions([]);
      }

      setLoading(true);

      const data = await window.api.generateTest(settings);

      const questionsResponse: { questions: QuestionType[] } = JSON.parse(
        data.choices[0].message.content,
      );

      setQuestions(questionsResponse.questions);

      console.log(questionsResponse.questions);
    } catch (error) {
      console.error("AI generation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearTest = () => {
    setQuestions([]);
  };

  return (
    <aside className="bg-[#030A1c] w-64 p-6 flex flex-col">
      <h2 className="text-white text-lg font-semibold mb-6">
        Einstellungen des Tests
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="level" className="text-sm text-gray-300 font-medium">
            Deutsch Niveau
          </label>

          <select
            name="level"
            id="level"
            value={settings.level}
            onChange={handleChange}
            className="
            bg-[#0f172a]
            text-white
            border
            border-gray-700
            rounded-lg
            px-3
            py-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
          "
          >
            <option value="a1">A1</option>
            <option value="a2">A2</option>
            <option value="b1">B1</option>
            <option value="b2">B2</option>
            <option value="c1">C1</option>
            <option value="c2">C2</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="type" className="text-sm text-gray-300 font-medium">
            Typ
          </label>

          <select
            name="type"
            id="type"
            value={settings.type}
            onChange={handleChange}
            className="
            bg-[#0f172a]
            text-white
            border
            border-gray-700
            rounded-lg
            px-3
            py-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          >
            <option value="multiple_choice">Multiple Choice</option>
            <option value="fill_blank">Lückentext</option>
            <option value="word_order" disabled>
              Wortstellung
            </option>
            <option value="translation" disabled>
              Übersetzung
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="topic" className="text-sm text-gray-300 font-medium">
            Thema
          </label>

          <select
            name="topic"
            id="topic"
            value={settings.topic}
            onChange={handleChange}
            className="
            bg-[#0f172a]
            text-white
            border
            border-gray-700
            rounded-lg
            px-3
            py-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
          "
          >
            <option value="conjugation">Konjugation</option>
            <option value="articles">Artikel</option>
            <option value="cases">Kasus</option>
            <option value="relative_clauses">Relativsätze</option>
            <option value="prepositions">Präpositionen</option>
            <option value="adjective_declension">Adjektivdeklination</option>
            <option value="separable_verbs">Trennbare Verben</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="count" className="text-sm text-gray-300 font-medium">
            Anzahl
          </label>

          <select
            name="count"
            id="count"
            value={settings.count}
            onChange={handleChange}
            className="
            bg-[#0f172a]
            text-white
            border
            border-gray-700
            rounded-lg
            px-3
            py-2
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            transition
          "
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <button
          type="submit"
          className="
          bg-[#646cff] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-[#535bf2] transitionduration-300 ease-in-outactive:scale-95 cursor-pointer w-full mb-6"
        >
          Test generieren
        </button>
      </form>

      <button
        onClick={handleClearTest}
        className="
          bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-600 transitionduration-300 ease-in-outactive:scale-95 cursor-pointer w-full"
      >
        Test löschen
      </button>
    </aside>
  );
};

export default Nav;
