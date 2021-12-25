import "./search-results.css";
import { useNavigate } from "react-router-dom";

const SearchResultsRow = ({ widget }) => {

    const navigate = useNavigate();

    function setActive() {
        navigate(`/widget/${widget.id}`)
    }

    return (
        <tr onClick={setActive}>
            <td>{widget.name}</td>
            <td>{widget.description}</td>
        </tr>
    );
}
 
export default SearchResultsRow;