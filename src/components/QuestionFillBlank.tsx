import { useState } from "react";
import { QuestionFBType } from "../types/test";

type QuestionProps = {
  questionContent: QuestionFBType;
};

const QuestionFillBlank: React.FC<QuestionProps> = ({ questionContent }) => {
  const { instructions, question, correct } = questionContent;

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    setIsCorrect(null);
    setShowAnswer(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsCorrect(answer.trim().toLowerCase() === correct.trim().toLowerCase());
  };

  return (
    <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg mx-auto my-3 w-full">
      <h3 className="text-white opacity-50 text-md italic">{instructions}</h3>
      <h3 className="text-white text-lg font-semibold mb-4">{question}</h3>

      <div className="flex items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={answer}
            onChange={handleChange}
            disabled={isCorrect === true}
            className={`
            py-2 px-4 rounded-lg border text-left transition duration-200
            ${
              isCorrect === null
                ? "bg-[#11244A] border-gray-700 text-white"
                : isCorrect
                  ? "bg-green-500 border-green-400 text-white"
                  : "bg-red-500 border-red-400 text-white"
            }
          `}
          />
          <button
            type="submit"
            className="py-2 px-4 rounded-lg border transition duration-200 active:scale-95 cursor-pointer bg-white text-black font-bold ml-3"
          >
            Prüfen
          </button>
        </form>

        <button
          onClick={() => setShowAnswer(true)}
          className="py-2 px-4 rounded-lg border transition duration-200 active:scale-95 cursor-pointer bg-white text-black font-bold ml-3"
        >
          Antwort anzeigen
        </button>

        {showAnswer && (
          <div className="italic ml-3 font-bold text-green-500">{correct}</div>
        )}
      </div>

      <div className="flex flex-col gap-3"></div>
    </div>
  );
};

export default QuestionFillBlank;
