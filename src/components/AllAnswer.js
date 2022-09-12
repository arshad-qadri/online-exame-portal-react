import React from "react";

const AllAnswer = ({ index, que, ans, corAns }) => {
  return (
    <div className="my-4">
      <p className="text-lg mb-1">
        <span className="font-bold text-md">{index + 1}. </span>
        <span >
         {que}
        </span>
      </p>
      <div>
        <span className="font-bold text-md">Ans: </span>
        <span
          className={`${corAns == ans[index] ? "bg-green-200" : "bg-red-200"} px-2`}
        >
          {ans[index]}
        </span>
      </div>
    </div>
  );
};

export default AllAnswer;
