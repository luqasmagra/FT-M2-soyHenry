import React from "react";
import { Link } from "react-router-dom";
import s from "./Ciudad.module.css";

export default function Ciudad({ city }) {
  return (
    <div className={s.container}>
      <div className={s.infoCont}>
        <h3>{city.name}</h3>
        <div>Temperatura: {city.temp} ºC</div>
        <div>Clima: {city.weather}</div>
        <div>Viento: {city.wind} km/h</div>
        <div>Cantidad de nubes: {city.clouds}</div>
        <div>Latitud: {city.latitud}º</div>
        <div>Longitud: {city.longitud}º</div>
        <br></br>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span>Volver</span>
        </Link>
      </div>
    </div>
  );
}
