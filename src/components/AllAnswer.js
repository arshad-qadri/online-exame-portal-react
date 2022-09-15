import React from "react";

const AllAnswer = ({ index, que, ans, corAns }) => {
  return (
    <div className="my-8 text-color w-4/5 mx-auto">
      <p className="mb-1">
        <span className="text-2xl font-bold ">{index + 1}. </span>
        <span className="text-xl">{que}</span>
      </p>
      <div className="mt-2">
        <span className="text-2xl font-bold">Ans: </span>
        <span
          className={`${
            corAns === ans[index] ? "bg-green-700" : "bg-red-700"
          } px-2 text-xl py-1 rounded-sm`}
        >
          {ans[index]}
        </span>
      </div>
    </div>
  );
};

export default AllAnswer;
