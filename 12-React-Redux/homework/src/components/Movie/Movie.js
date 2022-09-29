import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }
  render() {
    const movie = this.props.movie;
    return (
      <div className="container details movie-card">
        <h1 className="title">
          {movie.Title}
          <span>{movie.Rated}</span>
        </h1>
        <span>{movie.Year}</span>
        <p>{movie.Plot}</p>
        <div className="description container2">
          <img src={movie.Poster} alt="movie poster" />
          <ul className="column">
            <li>Genero/s: {movie.Genre}</li>
            <li>Director/es: {movie.Director}</li>
            <li>Escritor/es: {movie.Writer}</li>
            <li>Actores: {movie.Actors}</li>
            <li>Rating: {movie.imdbRating} imdB</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: (movie) => dispatch(getMovieDetail(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
