import React, { useState } from "react";
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
    <form className="w-4/5 h-full flex flex-col justify-around mx-auto">
      <div>
        <p className="text-color text-xl font-bold">
          <span className="text-2xl">{ind + 1}. </span>
          {` ${questions[ind].que}`}
        </p>
        {questions[ind].options.map((item, index) => (
          <div key={index} className="my-7">
            <input
              className="chekBox-color cursor-pointer scale-150 border-white"
              type="radio"
              name="answer"
              value={item.opt}
              id={`answer${index}`}
              onChange={(e) => setCheckVal(e.target.value)}
              checked={checkVal === item.opt}
            />
            <label className="ml-3 text-color text-lg capitalize">
              {item.opt}
            </label>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between">
        <button
          className={`btn-color btn-text-color px-9 py-2 font-bold ${
            ind === 0 ? "cursor-no-drop" : "cursor-pointer"
          }  rounded-md shadow-md`}
          onClick={handlePrevious}
          disabled={ind === 0}
        >
          Previous
        </button>
        <button
          className="btn-color btn-text-color px-9 py-2 font-bold cursor-pointer rounded-md shadow-md"
          onClick={handleNext}
        >
          {questions.length - 1 === ind ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  ) : (
    <>
      <div className="text-center text-5xl font-bold mb-5 text-color">
        You have scored {scored}/5
      </div>
      {questions.length > 0 &&
        questions.map((item, ind) => (
          <AllAnswer
            key={ind}
            index={ind}
            que={item.que}
            ans={storeAns.answers}
            corAns={item.answer}
          />
        ))}
    </>
  );
};

export default Questions;
