import React from "react";
export default function PokeStauts({ pokemonName = "pikachu" }) {
  console.log(pokemonName);
  return (
    <>
      <div className="absoluteB "></div>
      <div className="w-96 h-32 bg-slate-100 rounded-3xl border-2 border-black">
        <p className="pl-5">{pokemonName+" lv.1"}</p>
        <div className="ml-20 mt-2 ">
        <div className="h-5 w-60 bg-green-500 rounded-3xl border-2 border-black"></div>
        <p className="mt-1 ml-32">HP 32/32</p>
        </div>
      </div>
    </>
  );
}
