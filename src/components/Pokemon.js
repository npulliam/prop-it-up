import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
  const [allPokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(err => {
            console.log(err)
        })
      }
    
  const pokeList = allPokemon.map((result, i) => {
    return <li key={i}>{result.name}</li>
  })
  

  return (
        <div className="col text-center">
          <button className="btn btn-dark" onClick={getPokemon}>Fetch</button>
          <ul>
            {pokeList}
          </ul>
        </div>
  );
}


export default Pokemon;