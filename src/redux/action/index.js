import { LOGIN, LOGOUT } from "../type";

export const loginAction = (formData) => {
  return {
    type: LOGIN,
    payload: formData,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};
