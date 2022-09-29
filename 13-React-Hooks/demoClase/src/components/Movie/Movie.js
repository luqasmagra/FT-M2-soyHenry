import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, cleanDetail } from "../../actions/index";

import "./Movie.css";

const Movie = (props) => {
  const movieId = props.match.params.id;
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(movieId));

    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, movieId]);

  return movieDetail["Title"] ? (
    <div className="movie-detail">
      <h4>{movieDetail.Title}</h4>
      <p>{movieDetail.Year}</p>
      <img src={movieDetail.Poster} alt="icon"></img>
      <p>{movieDetail.Plot}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Movie;

// class Movie extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     this.props.getMovieDetail(this.props.match.params.id);
//   }

//   render() {

//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     movieDetail: state.movieDetail,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getMovieDetail: (movieId) => {
//       dispatch(getMovieDetail(movieId));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Movie);

// // useState() => Crear estados locales
// // useEffect() =>

// useEffect(() => {
//   // andá a buscar detalle de película => MOUNT
// }, [variable]);

// // useDispatch => disparador de dispatch

// // useSelector => mapStateToProps
