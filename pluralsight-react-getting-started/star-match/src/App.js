
import { useState } from "react";
import Instructions from "./components/instructions";
import GameBoard from "./components/gameboard";
import "./App.css";


function pickTarget(availableNumbers) {
  if (availableNumbers.length === 0) {
    return null;
  } else if (availableNumbers.length === 1) {
    return availableNumbers[0];
  }

  return availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
}

function createInitialState() {
  const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return {
    availableNumbers,
    selection: [],
    target: pickTarget(availableNumbers),
    showNewGame: false
  }
}

function updateState(state, number) {
  if (!state.availableNumbers.includes(number)) {
    return state;
  }

  const selection = state.selection.includes(number)
    ? state.selection.filter(i => i !== number)
    : [...state.selection, number];

  const result = selection.reduce((p, c) => p + c, 0);

  if (result === state.target) {
    const availableNumbers = state.availableNumbers.filter(n => !selection.includes(n));

    return {
      availableNumbers,
      selection: [],
      target: pickTarget(availableNumbers),
      showNewGame: availableNumbers.length === 0
    }
  }

  return {
    ...state,
    selection
  }
}

function App() {

  const [state, setState] = useState(createInitialState());  

  function handleSelect(number) {
    setState(updateState(state, number))
  }

  function handleNewGame() {
    setState(createInitialState())
  }

  return (
    <div className="container">
      <Instructions />
      <GameBoard {...state} handleNewGame={handleNewGame} handleSelect={handleSelect} />
    </div>
  );
}

export default App;
