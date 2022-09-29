import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <img
          id="logo"
          src="https://img.freepik.com/vector-premium/logotipo-camara-pelicula_7108-42.jpg"
          width="150"
          height="150"
          alt=""
        />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">Favoritas</NavLink>
            <a href="https://github.com/luqasmagra">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
