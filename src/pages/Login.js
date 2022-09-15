import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/action";

const Login = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      alert("Both fields are mandatory.");
    } else {
      dispatch(loginAction(formData));       
      setFormData({ ...formData, email: "", password: "" })
      nevigate("/exam");
    }
   
  };
  return (
    <div className="w-96 h-96 shadow-sm rounded-lg login">
      <div className="p-8">
        <h2 className="text-color text-center text-2xl font-bold mb-2">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="my-6">
            <label className="text-color">Email</label> <br />
            <input
              type="email"
              className="w-full h-9 pl-4 outline-none placeholder:text-sm mt-2 rounded-md"
              placeholder="Enter email."
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="my-6">
            <label className="text-color">Passwod</label> <br />
            <input
              type="password"
              className="w-full h-9 pl-4 outline-none placeholder:text-sm mt-2 rounded-md"
              placeholder="Enter password."
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full login_btn py-3 text-color text-xl font-bold shadow-lg rounded-md"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
