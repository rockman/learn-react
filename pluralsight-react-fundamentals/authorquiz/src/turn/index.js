
import PropTypes from "prop-types";
import Book from "../book";

const Turn = ({ author, books, selectionClassName, onAnswer }) => {

    return (
        <div className={"row turn " + selectionClassName}>
            <div className="col-4 offset-1">
                <img src={author.url} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {books.map((book) => <Book title={book} key={book} onClick={onAnswer} />)}
            </div>
        </div>
    );
}

Turn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectionClassName: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
}
 
export default Turn;