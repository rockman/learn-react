
import { useState } from "react";
import Number from "./Number";

const Numbers = ({ target, availableNumbers }) => {

    const [selection, setSelection] = useState([]);

    const stateFor = (value) => {
        if (!availableNumbers.includes(value)) {
            return 'disabled';
        }

        if (selection.includes(value)) {
            return 'selected';
        }

        return '';
    };

    const handleSelect = (value) => {
        if (availableNumbers.includes(value)) {
            if (selection.includes(value)) {
                setSelection(selection.filter(i => i !== value));
            } else {
                setSelection([...selection, value]);
            }
        }
    };

    return (
        <div>
            { Array.from({ length: 9 }, (_, i) => 
                <Number
                    key={i}
                    value={i + 1} 
                    state={stateFor(i + 1)}
                    onClick={() => handleSelect(i + 1)}
                />)}
        </div>
    )
}


export default Numbers;
