import {
  GET_NOW_PLAYING,
  ERROR_MESSAGE,
  GET_SIMILAR,
  GET_MOVIE,
} from "./actionType";

const initialState = {
  nowPlayingMovies: [],
  similarMovies: [],
  movieData: {},
  errorMessage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        movieData: action.payload,
      };
    case GET_SIMILAR:
      return {
        ...state,
        similarMovies: action.payload,
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
