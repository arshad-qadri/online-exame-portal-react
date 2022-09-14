import React from "react";

const index = ({ children }) => {
  return (
    <>
      <div className="w-full layout" style={{ height: "calc(100vh - 92px)" }}>
        <div className="layout-exam-dashboard">
          <div className="exam-left">
            <h2>Subject</h2>
            <u>
              <li>
                <a href="#">Front-End</a>
              </li>
            </u>
          </div>
          <div className="exam-right">{children}</div>
        </div>
      </div>
    </>
  );
};

export default index;
