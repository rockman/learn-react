import "./search-results.css";

const SearchResultsRow = ({ widget }) => {
    function setActive() {

    }

    return (
        <tr onClick={setActive}>
            <td>{widget.name}</td>
            <td>{widget.description}</td>
        </tr>
    );
}
 
export default SearchResultsRow;