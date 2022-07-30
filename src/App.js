import "./App.css";
import "./index.css";
import React, { useState } from "react";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(6);

  const refreshDice = () => {
    const rannum = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(rannum);
  };

  return (
    <div>
      <center>
        <img
          height={300}
          width={300}
          src={require(`./assets/${diceNumber}.png`)}
        ></img>
        <br />
        <button onClick={()=> {refreshDice()}} className="button">Roll</button>
      </center>
    </div>
  );
};

export default App;
