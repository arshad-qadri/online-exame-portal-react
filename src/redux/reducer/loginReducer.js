import { LOGIN, LOGOUT } from "../type";

const loginCredential = {
  email: "",
  password: "",
  isLogin: false,
};

const loginReducer = (state = loginCredential, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        email: "",
        password: "",
        isLogin: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
