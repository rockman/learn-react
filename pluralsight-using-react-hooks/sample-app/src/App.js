
import { useState } from "react";


function App() {

  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  return (
    <div id="container">
      <input type="text" value={text} onChange={handleTextChange} />
      <br></br>
      <p>{text}</p>
    </div>
  );
}

export default App;
