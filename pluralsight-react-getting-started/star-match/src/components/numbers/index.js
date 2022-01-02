
import Number from "./Number";

const Numbers = ({ availableNumbers, selection, incorrect, gameOver, handleSelect }) => {

    const stateFor = (value) => {
        if (!availableNumbers.includes(value)) {
            return 'disabled';
        }

        if (selection.includes(value)) {
            return incorrect ? 'incorrect' : 'selected';
        }

        return '';
    };

    function handleClick(value) {
        if (!gameOver) {
            handleSelect(value)
        }
    }

    return (
        <div>
            { 
              Array.from({ length: 9 }, (_, i) => {
                const value = i + 1;
                return <Number key={i} value={value} state={stateFor(value)}
                  onClick={() => handleClick(value)} />
              })
            }
        </div>
    )
}


export default Numbers;
