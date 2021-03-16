import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPoke = (props) => {
    const [allPokemon, setPokemon] = useState([]);
    
    const getPokemon=()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000")
            .then(response => (setPokemon(response.data.results)))
    }
    console.log(allPokemon)
    const pokeList = allPokemon.map((result, i) => {
        return <li key={i}>{result.name}</li>
      })

    return (
        <div className="container">
        <div className="row">
          <button className="btn btn-dark" onClick={getPokemon}>Fetch</button>
        </div>
        <div className="row">

        </div>
          <div className="col text-center">
            <ul>
            {pokeList}
        </ul>
        </div>
        
      </div>
    )
}

export default AxiosPoke;