import Book from "./Book";

const BookList = ({ books, onBookDeleteClick }) => {

    return books.length ?
        <ul className="list-group list-group-flush">
            { books.map(book => <Book title={book} onBookDeleteClick={onBookDeleteClick} key={book} />) }            
        </ul>
        : <></>;
}
 
export default BookList;
