import { useState, useEffect } from "react";
import "../App.css"

// Define callback function outside the component
function transformPokemon(pokemonData) {
  // Transform pokemonData to { name, height, weight, imgUrl }
  // Find the first image URL (usually in pokemonData.sprites.front_default)
  console.log(pokemonData);
  const temp = {
    name: pokemonData.name,
    weight: pokemonData.weight,
    height: pokemonData.height,
    imgUrl: pokemonData.sprites.front_default,
  };
  return temp;
}

export default function PokemonDisplay() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Fetch pokemon data here
    setIsLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    // fetch("https://localhost:3000")  
    .then((response) => response.json())
      .then(transformPokemon)
      .then((p) => setPokemon(p))
      .then(() => setIsLoading(false));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="poke">
      {/* Display name, weight, height, and image */}
      <h1>{pokemon.name}</h1>
      <p>weight: {pokemon.weight}</p>
      <p>height: {pokemon.height}</p>
      <img src={pokemon.imgUrl} alt={pokemon.name} />
    </div>
  );
}