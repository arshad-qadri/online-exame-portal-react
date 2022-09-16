import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction, themeAction } from "../redux/action";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const { isLogin } = useSelector((state) => state.login);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  useEffect(() => {
    const redirectLogin = () => {
      if (!isLogin) {
        nevigate("/");
      }
    };
    redirectLogin();
    // eslint-disable-next-line
  }, [isLogin]);
  return (
    <div className="w-full text-color py-3 text-center header">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Online Exam</h2>
          <div className="flex justify-center items-center gap-8">
            {/* ======== */}

            {isLogin && (
              <button
                className="text-2xl"
                onClick={() => dispatch(logoutAction())}
                title="Logout"
              >
                <IoMdLogOut />
              </button>
            )}
            <label
              for="toggle-example-checked"
              className="flex items-center cursor-pointer relative"
            >
              <input
                type="checkbox"
                id="toggle-example-checked"
                className="sr-only"
                checked={theme === "dark"}
                onClick={() =>
                  dispatch(
                    themeAction(`${theme === "dark" ? "light" : "dark"}`)
                  )
                }
              />
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
              <span className="ml-3 text-gray-900 text-xm font-bold text-color capitalize">
                {theme}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
