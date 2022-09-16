import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Instructions from "../components/Instructions";
import Loader from "../components/Loader";
import Questions from "../components/Questions";
import { fetchQuestion } from "../redux/action";

const Quiz = () => {
  const [ques, setQues] = useState([]);
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);
  const [start, setStart] = useState(false);

  useEffect(() => {
    dispatch(fetchQuestion("/json/question.json"));
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setQues(questions);
  }, [questions]);

  return (
    <>
      {start ? (
        ques.length > 0 ? (
          <Questions questions={ques} />
        ) : (
          <Loader />
        )
      ) : (
        <Instructions setStart={setStart} />
      )}
    </>
  );
};

export default Quiz;
