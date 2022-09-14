import React from "react";

const index = ({ children }) => {
  return (
    <>
      <div className="w-full layout" style={{ height: "calc(100vh - 92px)" }}>
        <div className="layout-exam-dashboard">
          <div className="exam-left pl-8 py-4">
            <h2 className="text-white font-bold text-xl">Subject</h2>
            <u>
              <li className="list-none">
                <a href="#" className="text-white text-sm no-underline">
                  Front-End
                </a>
              </li>
            </u>
          </div>
          <div className="exam-right p-8">{children}</div>
        </div>
      </div>
    </>
  );
};

export default index;
