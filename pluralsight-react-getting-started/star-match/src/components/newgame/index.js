
const NewGame = ({ handleNewGame }) => {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div>
                <p className="text-center">Game Over</p>
                <button onClick={() => handleNewGame()}>New Game</button>
            </div>
        </div>
    )
}


export default NewGame;
