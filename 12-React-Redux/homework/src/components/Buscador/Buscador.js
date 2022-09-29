import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Buscador.css";
import { addMovieFavorite, getMovies } from "../../actions/index";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="cnt">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">Buscar</button>
        </form>
        <div className="main-container">
          {this.props.movies.results?.map((movie) => {
            return (
              <>
                <div>{movie.title}</div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                />
              </>
            );
          })}
          {/* {this.props.movies?.map((movie) => {
            return (
              <>
                <img src={movie.Poster} id="img" />
                <div className="list-item">
                  
                    <span>{movie.Title}</span>
                  
                  <button
                    onClick={() =>
                      this.props.addMovieFavorite({
                        title: movie.Title,
                        id: movie.imdbID,
                        key: movie.imdbID,
                        img: movie.Poster,
                      })
                    }
                  >
                    Añadir a Favs
                  </button>
                </div>
              </>
            );
          })} */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
