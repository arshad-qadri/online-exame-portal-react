import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Questions from "../components/Questions";
import { fetchQuestion } from "../redux/action";

const Quiz = () => {
  const [ques, setQues] = useState([]);
  const dispatch = useDispatch();
  const { questions, isLoading } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(fetchQuestion("/json/question.json"));
  }, []);
  useEffect(() => {
    console.log("isLoading===", isLoading);
  }, [isLoading]);

  useEffect(() => {
    setQues(questions);
  }, [questions]);

  return <>{ques.length > 0 ? <Questions questions={ques} /> : <Loader />}</>;
};

export default Quiz;
