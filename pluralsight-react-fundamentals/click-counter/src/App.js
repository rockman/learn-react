import './App.css';

function App({clicks, onClick}) {
  return (
    <div className="App" onClick={onClick}>This div has been clicked {clicks} number of times.</div>
  );
}

export default App;
