import { useState, useEffect } from "react";
import "../App.css"

// Define callback function outside the component
function transformPokemon(pokemonData) {

  const pokemon = {
    name: pokemonData.name,
    weight: pokemonData.weight,
    image: pokemonData.sprites.front_default
  }

  console.log(pokemon)
  return pokemon
}

export default function PokemonDisplay() {
  const [pokemon , setPokemon] = useState({})

  useEffect(() => {
    
    console.log("Hello from useEffect")
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
      .then(response => response.json())
      .then(transformPokemon)
      .then(p => setPokemon(p))
  },[])

  return (
    <>
    <p>Name: {pokemon.name}</p>
    <p>Weight: {pokemon.weight}</p>
    <img src={pokemon.image} />
   </>
  );
}