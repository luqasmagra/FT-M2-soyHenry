import React from "react";
import s from "./Card.module.css";

export default function Card({ onClose, name, min, max, img }) {
  // acá va tu código
  return (
    <div className={s.contenedor}>
      <button onClick={onClose} className={s.button}>
        X
      </button>
      <h2>{name}</h2>
      <div className={s.infoCont}>
        <div>
          <h6>Min:</h6>
          <p>{min}</p>
        </div>
        <div>
          <h6>Max:</h6>
          <p>{max}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="img not found"
        ></img>
      </div>
    </div>
  );
}
