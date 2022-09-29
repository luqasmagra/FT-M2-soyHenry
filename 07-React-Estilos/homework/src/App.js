import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Footer from "./components/Footer.jsx";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      {/* <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
    <hr /> */}
      <div>
        <Header />
      </div>
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
      <div>
        <Cards cities={data} />
      </div>
      <hr />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
