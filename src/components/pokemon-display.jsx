import { useState, useEffect } from "react";
import "../App.css"

// Define callback function outside the component
function transformPokemon(pokemonData) {
  //make object
  const pokemon = {
    name: pokemonData.name,
    weight: pokemonData.weight,
    image: pokemonData.sprites.front_default
  }
  //return the object
  console.log(pokemon)
  return pokemon
}

export default function PokemonDisplay() {
  const [pokemon , setPokemon] = useState({})

  useEffect(() => {
    
    console.log("Hello from useEffect")
    fetch('https://pokeapi.co/api/v2/pokemon/charmander') //fetch real data & test in network
      .then(response => response.json()) //transforms (convert) data to json object
      .then(transformPokemon) // gets the information i want in object
      .then(p => setPokemon(p)) //set object (filtered information i want from fetch) in useState
  },[])

  return (
    <>
    <p>Name: {pokemon.name}</p>
    <p>Weight: {pokemon.weight}</p>
    <img src={pokemon.image} />
   </>
  );
}