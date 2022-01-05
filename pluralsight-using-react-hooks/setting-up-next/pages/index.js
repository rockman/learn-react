import { useState} from "react";


const InputElement = () => {

  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  function handleTextChange(event) {
      const value = event.target.value;
      setText(value);
      setHistory([...history, value]);
  }

  return (
      <div>
        <input
                placeholder="Enter Some Text"
                onChange={handleTextChange}
                value={text}
                />
        <br/>
        Current: {text}
        <br/>
        History:
        <ul>
            {history.map(i => <li>{i}</li>)}
        </ul>
      </div>
  )
}


export default InputElement;

