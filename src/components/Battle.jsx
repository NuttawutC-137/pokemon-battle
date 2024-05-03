import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
import {Pokemon , PokemonBack} from "./Pokemon";
import Selectbar from "./Selectbar";
import PokeStauts from "./PokeStatus";
export default function Battlefield() {
  const [pokemonName, setPokemonName] = useState('');
  return (
    <div>
      <Selectbar onSelect={setPokemonName}></Selectbar>
      <div className="battlefiled static ...">
        <div className="parent">
          <div className="absolute Mbottom z-10">
          <PokeStauts pokemonName={pokemonName.name || 'magikarp'}></PokeStauts>
          </div>
          <div className="absoluteR Mtop z-10">
          <PokeStauts></PokeStauts>
          </div>
          <div className="absoluteB">
            <Menu pokemonName={pokemonName.name}></Menu>
          </div>
          <div className="absoluteR mr-32 mt-10">
            <Pokemon pokemonName="pikachu"></Pokemon>
          </div>
          <div className="absoluteL ml-40 mt-44">
            <PokemonBack pokemonName={pokemonName.name}></PokemonBack>
          </div>
        </div>
      </div>
    </div>
  );
}
