import React from "react";
import s from "./Footer.module.css";

export default function Footer(props) {
  // acá va tu código
  return (
    <div className={s.container}>
      <div className={s.box3}>
        <h4>SIGUENOS</h4>
        <a href="https://facebook.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt="facebook logo"
          />
        </a>
        <a href="https://twitter.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png"
            alt="twitter logo"
          />
        </a>
        <a href="https://instagram.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="instagram logo"
          />
        </a>
        <a href="https://linkedin.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt="linkedin logo"
          />
        </a>
      </div>
      <div className={s.box2}>
        <h4>SOBRE NOSOTROS</h4>
        <p>
          Designed and built with all the love in the world by the Climax team
          with the help of our contributors. Code licensed MIT, docs CC BY 3.0.
          Currently v5.2.0.
        </p>
      </div>
      <div className={s.box1}>
        <a href="#index.html" id={s.log}>
          <img
            src="https://centroclima.org/wp-content/uploads/2016/02/cropped-cropped-logo-300x300.png"
            alt="logo not found"
          ></img>
          <h6>Climax</h6>
        </a>
      </div>
    </div>
  );
}
