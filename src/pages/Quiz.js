import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Questions from "../components/Questions";
import { fetchQuestion } from "../redux/action";

const Quiz = () => {
  const [ques, setQues] = useState([]);
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(fetchQuestion("/json/question.json"));
  }, []);

  useEffect(() => {
    setQues(questions);
  }, [questions]);

  return (
    <div className="h-full">
      <Questions questions={ques} />
    </div>
  );
};

export default Quiz;
