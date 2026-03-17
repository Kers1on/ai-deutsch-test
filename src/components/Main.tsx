import QuestionMultipleChoice from "./QuestionMultipleChoice";
import QuestionFillBlank from "./QuestionFillBlank";
import { QuestionType } from "../types/test";
import Lottie from "lottie-react";
import animationDataIdle from "../assets/Language Translator.json";
import animationDataLoading from "../assets/Loading animation blue.json";

type MainProps = {
  questions: QuestionType[];
  loading: boolean;
};

const Main: React.FC<MainProps> = ({ questions, loading }) => {
  return (
    <div className="flex-1 bg-[#051024] flex flex-col p-6 items-center">
      <div className="opacity-50 italic">
        Die Tests werden mithilfe KI generiert. Falsche Antworten sind möglich.
      </div>
      {questions.length === 0 && loading === false ? (
        <Lottie
          animationData={animationDataIdle}
          loop={true}
          className="w-2xl flex-1 justify-center"
        />
      ) : questions.length === 0 && loading === true ? (
        <Lottie
          animationData={animationDataLoading}
          loop={true}
          className="w-2xl flex-1 justify-center"
        />
      ) : (
        questions.map((q, index) => {
          switch (q.type) {
            case "multiple_choice":
              return <QuestionMultipleChoice key={index} questionContent={q} />;
            case "fill_blank":
              return <QuestionFillBlank key={index} questionContent={q} />;
            default:
              return null;
          }
        })
      )}
    </div>
  );
};

export default Main;
