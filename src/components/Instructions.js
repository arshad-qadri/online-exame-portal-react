import React from "react";

const Instructions = ({ setStart }) => {
  return (
    <div className="w-4/5 h-full mx-auto text-color flex flex-col justify-center gap-3">
      <h2 className="text-2xl font-bold">Instructions</h2>
      <ol className="list-decimal pl-8 text-xl">
        <li>Please read carefully.</li>
        <li>Do not refresh the page.</li>
        <li>Attempt all questions.</li>
        <li>After all questions submit successfully.</li>
      </ol>
      <button
        onClick={() => setStart(true)}
        className="text-center btn-color btn-text-color w-28 rounded-md py-2 shadow-md font-bold mt-5"
      >
        Start now
      </button>
    </div>
  );
};

export default Instructions;
