import React from "react";
import s from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.contenedor}>
      <button onClick={props.onClose} className={s.button}>
        X
      </button>
      <h2>{props.name}</h2>
      <div className={s.infoCont}>
        <div>
          <h6>Min:</h6>
          <p>{props.min}</p>
        </div>
        <div>
          <h6>Max:</h6>
          <p>{props.max}</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="img not found"
        ></img>
      </div>
    </div>
  );
}
