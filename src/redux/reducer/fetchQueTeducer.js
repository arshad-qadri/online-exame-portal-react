import { FETCH_QUESTIONS, ISLOADING } from "../type";

const initstate = {
  questions: [],
  isLoading:false
};

const questionReducer = (state = initstate, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
      };
    case ISLOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default questionReducer;
