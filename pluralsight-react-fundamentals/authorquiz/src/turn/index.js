import Book from "../book";

const Turn = ({ author, books }) => {
    return (
        <div className="row turn">
            <div className="col-4 offset-1">
                <img src={author.url} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {books.map((book) => <Book title={book} key={book} />)}
            </div>
        </div>
    );
}
 
export default Turn;