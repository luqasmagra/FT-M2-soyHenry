import React from 'react';


export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
    <input type='text' placeholder='City...'></input>
    <button onClick={() => props.onSearch("Buscando...")}>Buscar</button>
  </div>
  )
};