import { FETCH_QUESTIONS, LOGIN, LOGOUT, THEME } from "../type";

// export const loadingAction = (loading) => {
//   alert(loading);
//   return {
//     type: ISLOADING,
//     payload: loading,
//   };
// };

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

const fetchQues = async (url) => {
  const data = await (await fetch(url)).json();
  return data;
};

export const fetchQuestion = (url) => {
  return async (dispatch) => {
    await dispatch({
      type: FETCH_QUESTIONS,
      payload: await fetchQues(url),
    });
  };
};


export const themeAction = (text) => {
  return {
    type: THEME,
    payload:text
  }
}