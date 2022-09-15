import { FETCH_QUESTIONS } from "../type";

const initstate = {
  questions: [],
};

const questionReducer = (state = initstate, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
};

export default questionReducer;
