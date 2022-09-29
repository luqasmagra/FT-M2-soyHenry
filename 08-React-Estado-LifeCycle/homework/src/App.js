import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [cities, setCities] = useState([]); /// c32c921abd1b66bfdcb54b3eccc606ac
  function onSearch(city) {
    const apiKey = "c32c921abd1b66bfdcb54b3eccc606ac";
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
      <hr />
      <div>
        <Footer />
      </div>
    </div>
  );
}
