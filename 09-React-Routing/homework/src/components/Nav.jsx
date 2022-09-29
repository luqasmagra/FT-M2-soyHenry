import React from "react";
import SearchBar from "./SearchBar.jsx";
import s from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className={s.container}>
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className={s.log}>
            <img
              src="https://centroclima.org/wp-content/uploads/2016/02/cropped-cropped-logo-300x300.png"
              alt="logo not found"
            ></img>
            <h1>Climax</h1>
          </span>
        </Link>
        <h3>
          &#8594; Tu <b>App</b> ideal para consultar el clima de <b>todo</b> el
          Mundo
        </h3>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
