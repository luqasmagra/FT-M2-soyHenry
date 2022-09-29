import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={s.container}>
      <button onClick={onClose} className={s.button}>
        X
      </button>
      <Link
        to={`/ciudad/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h3>{name}</h3>
      </Link>
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
