const Book = ({ title, onBookDeleteClick }) => {

    function onClick() {
        onBookDeleteClick(title);
    }

    return (
        <li className="list-group-item">
            <span>{title}</span>
            <button className="btn btn-sm float-end" onClick={onClick}>x</button>
        </li>
    );
}
 
export default Book;