import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';

export function Pokemon({ pokemonName }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemon(pokemonName);
        setImageUrl(pokemonData.sprites.front_default);
      } catch (error) {
        console.error("Failed to fetch Pokemon image", error);
      }
    };
    fetchData();
  }, [pokemonName]);

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt={pokemonName} className='size-64' /> : <p>Loading...</p>}
    </div>
  );
}

export function PokemonBack({ pokemonName="magikarp" }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemon(pokemonName);
        setImageUrl(pokemonData.sprites.back_default);
      } catch (error) {
        console.error("Failed to fetch Pokemon image", error);
      }
    };
    fetchData();
  }, [pokemonName]);

  return (
    <div>
      <img src={imageUrl} alt={pokemonName} className='size-64' />
    </div>
  )
}

