import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { fetchPokemonAll } from "../api/fetchPokemon";
import { Pokemon } from "./Pokemon";

export default function Selectbar({ onSelect }) {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetchPokemonAll();
        setPokemons(response.results);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    onSelect(pokemon);
    setSearchTerm("");
    setShowDropdown(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      setShowDropdown(true);
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="grid grid-cols-10 gap-0 m-5">
        <div className="col-span-8"></div>
        <div className="border-black h-10 col-span-2">
          <button
            className="bg-red-500 w-full h-full rounded-full hover:bg-red-700"
            onClick={() => {
              document.getElementById("Select").showModal();
              setShowDropdown(false);
            }}
          >
            <button>SELECT POKÉMON</button>
          </button>
          <dialog id="Select" className="modal">
            <div className="modal-box w-96 max-w-5xl">
              <h3 className="font-bold text-lg">Choose your Pokémon!</h3>
              <div className="py-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered w-full"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={() => setShowDropdown(true)}
                  />
                  {showDropdown && (
                    <div
                      className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-full absolute z-50"
                      ref={dropdownRef}
                    >
                      <div className="max-h-48 overflow-y-auto">
                        {filteredPokemons.map((pokemon) => (
                          <div
                            key={pokemon.name}
                            className="cursor-pointer hover:bg-base-200 py-1"
                            onClick={() => handlePokemonSelect(pokemon)}
                          >
                            {pokemon.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <h4 className="font-bold text-lg">{selectedPokemon?.name}</h4>
              </div>
              <div className="flex justify-center h-64">
                <Pokemon pokemonName={selectedPokemon?.name}></Pokemon>
              </div>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <div className="flex justify-center">
                  <button className="btn bg-green-500 hover:bg-green-700">Ok</button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}