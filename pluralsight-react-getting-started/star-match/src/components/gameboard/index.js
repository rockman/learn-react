
import Stars from "../stars";
import Numbers from "../numbers";
import NewGame from "../newgame";

const GameBoard = ({ target, availableNumbers, selection, showNewGame, handleNewGame, handleSelect }) => {

    return (
        <div className="d-flex justify-content-center">
            <div className="board-side border">
                { showNewGame
                  ? <NewGame handleNewGame={handleNewGame} />
                  : <Stars numberOfStars={target} />
                }
            </div>
            <div className="board-side border">
                <Numbers
                  availableNumbers={availableNumbers}
                  selection={selection}
                  handleSelect={handleSelect} />
            </div>
        </div>
    )
}


export default GameBoard;
