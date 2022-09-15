import { THEME } from "../type";

const initState = {
  theme: "dark",
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
