import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../redux/action";

const Header = () => {
  const { isLogin } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      nevigate("/");
    }
  }, [isLogin]);
  return (
    <div className="w-full text-white py-3 text-center header">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Online Exam</h2>
          {isLogin && (
            <button onClick={() => dispatch(logoutAction())}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
