export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
const apiKey = "9d0ece42";

export const getMovies = (movie) => {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_MOVIES, payload: data }));
  };
};

export const getMovieDetail = (idMovie) => {
  return function (dispatch) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${idMovie}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_MOVIE_DETAIL, payload: data }));
  };
};

export const addMovieFavorite = (id) => {
  return { type: ADD_MOVIE_FAVORITE, payload: id };
};

export const removeMovieFavorite = (id) => {
  return { type: REMOVE_MOVIE_FAVORITE, payload: id };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
