import {
  GET_NOW_PLAYING,
  ERROR_MESSAGE,
  GET_SIMILAR,
  GET_MOVIE,
} from "./actionType";
import axios from "axios";

export function getNowPlaying(payload) {
  const actionNowPlaying = {
    type: GET_NOW_PLAYING,
    payload,
  };

  return actionNowPlaying;
}

export function getMovie(payload) {
  const actionGetMovie = {
    type: GET_MOVIE,
    payload,
  };

  return actionGetMovie;
}

export function getSimilar(payload) {
  const actionGetSimilar = {
    type: GET_SIMILAR,
    payload,
  };

  return actionGetSimilar;
}

export function fetchNowPlaying(page = 1) {
  return async function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=ff7717b8f6b805ed52b895c55b728d1d`;

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

export function fetchMovie(id) {
  return async function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ff7717b8f6b805ed52b895c55b728d1d`;

    const { data } = await axios.get(`${url}`);

    if (!data) {
      dispatch(
        errorHandler("Something went wrong while trying to get the data 😟")
      );
    } else {
      dispatch(getMovie(data));
    }
  };
}

export function fetchSimilar(id) {
  return async function (dispatch) {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ff7717b8f6b805ed52b895c55b728d1d`;

    const { data } = await axios.get(`${url}`);

    if (!data) {
      dispatch(
        errorHandler("Something went wrong while trying to get the data 😟")
      );
    } else {
      dispatch(getSimilar(data.results));
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
