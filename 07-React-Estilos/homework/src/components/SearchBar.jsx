import React from "react";
import s from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.container}>
      <input type="text" placeholder="" className={s.input}></input>
      <button
        onClick={() => props.onSearch("Buscando...")}
        className="btn btn-primary"
      >
        Buscar
      </button>
    </div>
  );
}
