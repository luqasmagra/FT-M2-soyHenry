import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div className="cnt">
        <h2>Películas Favoritas</h2>
        <div className="main-container">
          {this.props.movies?.map((movie) => {
            return (
              <>
                <img src={movie.img} id="img" />
                <div className="list-item">
                  <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
                  <button
                    onClick={() => {
                      this.props.removeMovieFavorite(movie.id);
                    }}
                  >
                    Eliminar de Favs
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavourites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFavorite: (movie) => dispatch(removeMovieFavorite(movie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
