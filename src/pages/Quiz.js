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
    <div className="w-full  min-h-screen  ">
      <div className="w-full bg-black text-white py-3 text-center text-2xl font-bold">
        Quiz Question
      </div>
      <div className="lg:w-3/6 bg-white mx-auto  my-10">
        <Questions questions={questions} />
      </div>
    </div>
  );
};

export default Quiz;
