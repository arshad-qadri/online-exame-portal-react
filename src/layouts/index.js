import React from "react";
import Header from "../components/Header";

const index = ({ children }) => {
  return (
    <>
      <Header />
      <div lassName="w-full  min-h-screen">{children}</div>
    </>
  );
};

export default index;
