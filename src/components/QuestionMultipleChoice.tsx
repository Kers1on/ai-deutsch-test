import { useState } from "react";
import { QuestionMCType } from "../types/test";

type QuestionProps = {
  questionContent: QuestionMCType;
};

const QuestionMultipleChoice: React.FC<QuestionProps> = ({
  questionContent,
}) => {
  const { question, options, correct } = questionContent;

  const [selected, setSelected] = useState<number | null>(null);

  const handleCheck = (optionIndex: number) => {
    setSelected(optionIndex);
  };

  return (
    <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg mx-auto my-3 w-full">
      <h3 className="text-white text-lg font-semibold mb-4">{question}</h3>

      <div className="flex flex-col gap-3">
        {options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrect = index === correct;

          return (
            <button
              key={index}
              onClick={() => handleCheck(index)}
              className={`
                py-2 px-4 rounded-lg border text-left cursor-pointer transition duration-200 active:scale-95
                ${
                  selected === null
                    ? "bg-[#11244A] border-gray-700 hover:bg-[#0B1C3E] hover:border-blue-500"
                    : isSelected && isCorrect
                      ? "bg-green-600 border-green-400"
                      : isSelected && !isCorrect
                        ? "bg-red-600 border-red-400"
                        : "bg-[#11244A] border-gray-700"
                }
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionMultipleChoice;
