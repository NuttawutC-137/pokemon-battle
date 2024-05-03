import axios from "axios";

export async function fetchPokemon(pokemonName) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response?.data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
}

export async function fetchPokemonAll() {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`);
    return response?.data;
  } catch (error) {
    console.error('Error fetching all Pokemon:', error);
    throw error;
  }
}
