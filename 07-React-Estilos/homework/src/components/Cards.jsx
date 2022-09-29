import React from "react";
import Card from "./Card";
import s from "./Cards.module.css";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={s.contenedor}>
      {props.cities.map((e) => (
        <Card
          max={e.main.temp_max}
          min={e.main.temp_min}
          name={e.name}
          img={e.weather[0].icon}
          onClose={() => alert(e.name)}
          key={e.id}
        />
      ))}
    </div>
  );
}
