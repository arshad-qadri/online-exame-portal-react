import React, { useEffect, useState } from "react";
import AllAnswer from "./AllAnswer";

const Questions = ({ questions }) => {
  const [ind, setInd] = useState(0);
  const [checkVal, setCheckVal] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [scored, setScored] = useState(0);
  const [storeAns, setStoreAns] = useState({
    answers: [],
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (!checkVal) {
      return alert("Please select the answer !");
    }
    if (questions.length - 1 === ind) {
      const tempAns = storeAns.answers;
      alert("Submited successfully.");
      setStoreAns({
        ...storeAns,
        answers: tempAns,
      });
      tempAns.push(checkVal);
      const tempScore = [];
      tempAns.filter((item, indx) =>
        questions.map((items) => items.answer === item && tempScore.push(item))
      );
      setScored(tempScore.length);
      setIsSubmit(true);
    } else if (ind < questions.length - 1) {
      setInd(ind + 1);
      setStoreAns({
        ...storeAns,
        answers: [...storeAns.answers, checkVal],
      });
    }
    setCheckVal("");
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (ind > 0) {
      setInd(ind - 1);
      const array1 = storeAns.answers;
      const array2 = questions[ind - 1].options;
      const tempVal = [];
      array1.filter((item, indx) =>
        array2.map((items) => items.opt === item && tempVal.push(item))
      );
      const filteredVal = array1.filter((item, indx) => tempVal[0] !== item);
      setCheckVal(tempVal[0]);
      setStoreAns({
        ...storeAns,
        answers: [...filteredVal],
      });
    }
  };
  return questions.length > 0 && !isSubmit ? (
    <form>
      <div>
        <p>
          {ind + 1}. {questions[ind].que}
        </p>
        {questions[ind].options.map((item, index) => (
          <div key={index} className="my-2">
            <input
              className="cursor-pointer"
              type="radio"
              name="answer"
              value={item.opt}
              id={`answer${index}`}
              onChange={(e) => setCheckVal(e.target.value)}
              checked={checkVal === item.opt}
            />
            <label htmlFor="">{item.opt}</label>
          </div>
        ))}
      </div>
      <button
        className="bg-gray-600 text-white px-9 py-2 font-bold"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="bg-black text-white px-9 py-2 font-bold cursor-pointer"
        onClick={handleNext}
      >
        {questions.length - 1 === ind ? "Submit" : "Next"}
      </button>
    </form>
  ) : (
    <>
      <div className="text-center text-5xl font-bold mb-5">
        You have scored {scored}/5
      </div>
      {questions.length > 0 && questions.map((item, ind) => <AllAnswer key={ind} index={ind} que={item.que} ans={storeAns.answers} corAns={item.answer} />)}
    </>
  );
};

export default Questions;
