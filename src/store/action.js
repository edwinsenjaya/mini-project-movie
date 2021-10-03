import { GET_NOW_PLAYING, ERROR_MESSAGE } from "./actionType";
import axios from "axios";

export function getNowPlaying(payload) {
  const actionNowPlaying = {
    type: GET_NOW_PLAYING,
    payload,
  };

  return actionNowPlaying;
}

export function fetchNowPlaying() {
  return async function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=ff7717b8f6b805ed52b895c55b728d1d`;

    const { data } = await axios.get(`${url}`);

    if (!data) {
      dispatch(
        errorHandler("Something went wrong while trying to get the data 😟")
      );
    } else {
      dispatch(getNowPlaying(data.results));
    }
  };
}

export function errorHandler(payload) {
  const errorMessage = {
    type: ERROR_MESSAGE,
    payload,
  };

  return errorMessage;
}
