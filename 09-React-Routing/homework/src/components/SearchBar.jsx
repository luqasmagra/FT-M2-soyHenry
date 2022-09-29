import React, { useState } from "react";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState([]);
  return (
    <div className={s.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
        }}
      >
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={s.input}
        ></input>
        <input type="submit" value="Agregar" className={s.btn} />
      </form>
    </div>
  );
}
