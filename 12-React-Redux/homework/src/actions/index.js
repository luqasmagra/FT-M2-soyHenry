export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";

export function addMovieFavorite(payload) {
  return { type: ADD_MOVIE_FAVORITE, payload };
}

export function removeMovieFavorite(payload) {
  return { type: REMOVE_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=b93fc28e82022f20e846d72ad8f9135c&query=" +
        titulo
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function getMovieDetail(idMovie) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=b99de5b3&i=" + idMovie)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
  };
}
