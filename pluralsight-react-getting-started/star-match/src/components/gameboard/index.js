
import Stars from "../stars";
import Numbers from "../numbers";

const GameBoard = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="board-side border">
                <Stars numberOfStars={5} />
            </div>
            <div className="board-side border">
                <Numbers target={6} availableNumbers={[1, 2, 3, 4, 5, 6]}/>
            </div>
        </div>
    )
}


export default GameBoard;
