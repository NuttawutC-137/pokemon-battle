import { useState } from "react";
import "./App.css";
import Battle from "./components/Battle";

function App() {
  return (
    <div>
      <div className="h-screen bg-black grid grid-cols-5 bgimage">
        <div></div>
        <div className="col-span-3">
          <Battle></Battle>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
