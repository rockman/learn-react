
import { useState } from "react";
import Instructions from "./components/instructions";
import GameBoard from "./components/gameboard";
import "./App.css";
import Countdown from "./components/countdown";
import Timeout from "./components/timeout";


function pickOne(numbers) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function pickFancyTarget(numbers) {

  if (numbers.length < 3 || numbers.length === 9) {
    return pickOne(numbers);
  }

  const options = new Set(numbers);

  if (numbers.includes(1) && numbers.includes(2) && numbers.includes(3)) {
    options.add(6);
  }

  const numbersToAdd = numbers.filter(n => n < 9);
  for (let first = 0; first < numbersToAdd.length; first++) {
    for (let second = 0; second < numbersToAdd.length; second++) {
      if (second !== first) {
        const sum = numbers[first] + numbers[second];
        if (sum < 10) {
          options.add(sum);
        }  
      }
    }
  }

  return pickOne(Array.from(options));
}

const pickFromMoreThanOneAvailableNumber = pickFancyTarget;

function pickTarget(availableNumbers) {
  if (availableNumbers.length === 0) {
    return null;
  }
  
  if (availableNumbers.length === 1) {
    return availableNumbers[0];
  }

  return pickFromMoreThanOneAvailableNumber(availableNumbers);
}

function createInitialState() {
  const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return {
    availableNumbers,
    selection: [],
    target: pickTarget(availableNumbers),
    incorrect: false,
    timeout: false,
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
      incorrect: false,
      timeout: state.timeout,
      showNewGame: availableNumbers.length === 0
    }
  }

  return {
    ...state,
    selection,
    incorrect: result > state.target
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

  function handleTimeRanOut() {
    setState({
      ...state,
      timeout: true,
      showNewGame: true
    })
  }

  return (
    <div className="container">
      <Instructions />
      <GameBoard {...state} handleNewGame={handleNewGame} handleSelect={handleSelect} />
      { state.timeout
        ? <Timeout />
        : <Countdown handleTimeRanOut={handleTimeRanOut} />
      }
    </div>
  );
}

export default App;
