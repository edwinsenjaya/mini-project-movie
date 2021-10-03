import { GET_NOW_PLAYING, ERROR_MESSAGE } from "./actionType";

const initialState = {
  nowPlayingMovies: [],
  errorMessage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
