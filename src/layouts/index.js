import React from "react";
import { FiBook } from "react-icons/fi";

const index = ({ children }) => {
  return (
    <>
      <div className="w-full layout" style={{ height: "calc(100vh - 92px)" }}>
        <div className="layout-exam-dashboard">
          <div className="exam-left pl-8 py-4">
            <h2 className="text-white font-bold text-xl flex items-center gap-2">
              {" "}
              <span>
                <FiBook />
              </span>{" "}
              Subject
            </h2>

            <u>
              <li className="text-white">
                <a href="#" className="text-white text-sm">
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
