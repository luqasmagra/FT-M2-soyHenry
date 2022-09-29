import React from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.box3}>
        <a href="https://facebook.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
            alt="facebook logo"
          />
        </a>
        <a href="https://twitter.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="twitter logo"
          />
        </a>
        <a href="https://instagram.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="instagram logo"
          />
        </a>
        <a href="https://linkedin.com/in/lucas-magra-247161246/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt="linkedin logo"
          />
        </a>
        <a href="https://github.com/luqasmagra">
          <img
            src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
            alt="github logo"
          />
        </a>
      </div>
      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        About Us
      </Link>
      <div className={s.box1}>
        <a href="https://github.com/luqasmagra" id={s.log}>
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
