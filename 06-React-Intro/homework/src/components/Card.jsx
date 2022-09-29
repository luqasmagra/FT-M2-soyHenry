import React from 'react';

export default function Card(props) { //// PODRIA HACAER DESTRUCTURIN DE PROPS TRAYENDOME SOLO LAS PROPIEDADES NECESARIAS
  // acá va tu código                        (onClose, name, img, min, max)
  return (
  <div>
    <button onClick={props.onClose}>X</button>
    <h4>{props.name}</h4>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found"></img>
    <div><span>Min Max</span></div>
    <div><span>{props.min} {props.max}</span></div>
  </div>
  )
};