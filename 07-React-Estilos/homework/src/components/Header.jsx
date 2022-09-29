import React from "react";
import s from "./Header.module.css";

export default function Header() {
  // acá va tu código
  return (
    <div className="jumbotron jumbotron-fluid" id={s.contenedor}>
      <div>
        <a href="#index.html" id={s.log}>
          <img
            src="https://centroclima.org/wp-content/uploads/2016/02/cropped-cropped-logo-300x300.png"
            alt="logo not found"
          ></img>
          <h1 id={s.titulo}>Climax</h1>
        </a>
        <p id={s.subTitulo}>
          &#8594; Tu <b>App</b> ideal para consultar el clima de <b>todo</b> el
          Mundo
        </p>
      </div>
    </div>
  );
}
