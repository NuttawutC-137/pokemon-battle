import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Menu({pokemonName}) {
  const [showMenu, setShowMenu] = useState(true);
  const [selectMove, setSelectMove] = useState('What are you doing?');

  const toggleMenu = (move) => {
    setShowMenu(!showMenu);
    setSelectMove(move)
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowMenu(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-slate-300">
      {showMenu ? (
        <div className="grid grid-cols-2 gap-0 bg-slate-300 rounded-b-lg">
          <div className="border-2 border-black h-32 flex justify-center items-center mt-1 rounded-3xl">
            <p>{selectMove}</p>
          </div>
          <div>
            <div className="grid grid-rows-2 grid-cols-2 gap-1 m-2">
              <div className="h-14">
                <button
                  className="bg-red-500 w-full h-full rounded-full hover:bg-red-700"
                  onClick={toggleMenu}
                >
                  <b>FIGHT</b>
                </button>
              </div>
              <div>
                <button
                  className="bg-amber-400 w-full h-full rounded-full hover:bg-amber-600"
                  onClick={() => document.getElementById('Pokemon').showModal()}
                >
                  <b>POKÉMON</b>
                </button>
                <dialog id="Pokemon" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">comming soon later....</h3>
                    <p className="py-4">ไปกดใน Select Pokemon ด้านบนนะครับ</p>
                  </div>
                </dialog>
              </div>
              <div>
                <button className="bg-lime-500 w-full h-full rounded-full hover:bg-lime-700">
                  <b>BAG</b>
                </button>
              </div>
              <div>
                <button className="bg-cyan-400 w-full h-full rounded-full hover:bg-cyan-600">
                  <b>RUN</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-2 border-black h-32 w-full items-center mt-1 rounded-3xl">
          <div className="grid grid-rows-2 grid-cols-2 gap-1 m-2">
            <div className="h-14">
              <button
                className="bg-white w-full h-full rounded-full hover:bg-green-400"
                onClick={() =>toggleMenu("Cut")}
              >
                <b>Cut</b>
              </button>
            </div>
            <div className="h-14">
              <button
                className="bg-white w-full h-full rounded-full hover:bg-green-400"
                onClick={() =>toggleMenu("Tackle")}
              >
                <b>Tackle</b>
              </button>
            </div>
            <div>
              <button
                className="bg-white w-full h-full rounded-full hover:bg-green-400"
                onClick={() =>toggleMenu("Leer")}
              >
                <b>Leer</b>
              </button>
            </div>
            <div>
              <button
                className="bg-white w-full h-full rounded-full hover:bg-green-400"
                onClick={() => toggleMenu("Pain Split")}
              >
                <b>Pain Split</b>
                
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}