import React from "react";
const Login = ({ children }) => {
  return (
    <>
      <div
        className="w-full flex justify-center items-center layout"
        style={{ height: "calc(100vh - 56px)" }}
      >
        {children}
      </div>
    </>
  );
};

export default Login;
