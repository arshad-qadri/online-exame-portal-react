import React, { useEffect, useState } from "react";
import Questions from "../components/Questions";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/json/question.json");
      const res = await response.json();
      setQuestions(res.questions);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="">
        <Questions questions={questions} />
      </div>
    </div>
  );
};

export default Quiz;
