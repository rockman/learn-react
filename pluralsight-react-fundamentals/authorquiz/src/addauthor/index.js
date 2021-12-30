
import { useState } from "react";
import BookList from "./BookList";

const AddAuthor = ({ onAddAuthor }) => {

    const [name, setName] = useState("");

    const [booksData, setBooksData] = useState({
        books: ["foo", "bar"],
        newBook: ""
    });

    function onNameChange(e) {
        setName(e.target.value);
    }

    function onNewBookChange(e) {
        setBooksData({
            ...booksData,
            newBook: e.target.value
        });
    }

    function onBookDeleteClick(title) {
        setBooksData({
            ...booksData,
            books: booksData.books.filter(book => book !== title)
        });
    }

    function onAddNewBook(e) {
        setBooksData({
            books: [...booksData.books, booksData.newBook],
            newBook: ""
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        onAddAuthor(name, booksData.books);
    }

    return (
        <div className="container-fluid">
            <h1 className="offset-md-1 mt-3">Add Author</h1>
            <form className="addauthor offset-md-1 w-25" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={name} onChange={onNameChange} />
                </div>
                <div className="mt-3">
                    <label className="form-label">Books:</label>
                    <BookList books={booksData.books} onBookDeleteClick={onBookDeleteClick} />
                    <div className="input-group">
                        <input type="text" name="newBook" className="form-control" value={booksData.newBook} onChange={onNewBookChange} />
                        <input type="button" name="addNewBook" className="btn btn-secondary" value="+" onClick={onAddNewBook} />
                    </div>
                </div>
                <div className="mt-3 float-end">
                    <button type="submit" className="btn btn-primary">Add Author</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddAuthor;