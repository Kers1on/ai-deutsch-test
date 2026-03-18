import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { QuestionType } from "./types/test";

function App() {
  const isDemo = false; // if TRUE - it's not allow to use AI, but mock questions

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = isDemo ? "Der Tisch (Demo version)" : "Der Tisch";
  }, [isDemo]);

  return (
    <div className="flex min-h-screen">
      <Nav
        isDemo={isDemo}
        questions={questions}
        setQuestions={setQuestions}
        setLoading={setLoading}
      />
      <Main questions={questions} loading={loading} />
    </div>
  );
}

export default App;
