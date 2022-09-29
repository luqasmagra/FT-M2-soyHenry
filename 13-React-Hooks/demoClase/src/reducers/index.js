import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIE_DETAIL,
  CLEAN_DETAIL,
} from "../actions";

const initialState = {
  movies: [],
  moviesFavorites: [],
  movieDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload.Search,
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };

    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: [...state.moviesFavorites, action.payload],
      };

    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        movieDetail: {},
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
