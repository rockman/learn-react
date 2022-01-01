
import Number from "./Number";

const Numbers = ({ availableNumbers, selection, handleSelect }) => {

    const stateFor = (value) => {
        if (!availableNumbers.includes(value)) {
            return 'disabled';
        }

        if (selection.includes(value)) {
            return 'selected';
        }

        return '';
    };

    return (
        <div>
            { 
              Array.from({ length: 9 }, (_, i) => {
                const value = i + 1;
                return <Number key={i} value={value} state={stateFor(value)}
                  onClick={() => handleSelect(value)} />
              })
            }
        </div>
    )
}


export default Numbers;
