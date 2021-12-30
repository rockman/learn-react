
function App({ counter, incrementCounter, decrementCounter }) {
  return (
    <div>
      <div>{ counter }</div>
      <div>
        <button onClick={() => decrementCounter()}>-</button>
        <button onClick={() => incrementCounter()}>+</button>
      </div>
    </div>
  );
}

export default App;
