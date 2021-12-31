import { useState } from "react";

function Button({delta, onClick}) {
  return (
    <button onClick={() => onClick(delta)}>{delta}</button>
  )
}

function Display({value}) {
  return (
    <h1>{value}</h1>
  )
}

function App() {

  const [value, setValue] = useState(0);

  function update(delta) {
    setValue(value + delta);
  }

  return (
    <>
      <Button delta={1} onClick={update} />
      <Button delta={-1} onClick={update} />
      <Button delta={7} onClick={update} />
      <Display value={value} />
    </>
  );
}

export default App;
