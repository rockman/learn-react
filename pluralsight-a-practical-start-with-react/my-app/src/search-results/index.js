
import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({ allWidgets }) => {

    let { value } = useParams();
    value = parseInt(value);

    const filteredWidgets = allWidgets.filter(w => w.value === value);

    return (
        <div className="mt-2">
            <h4>Results for {value}:</h4>
            <table className="table table-hover">
                <tbody>
                    {filteredWidgets.map((w) => (
                        <SearchResultsRow key={w.id} widget={w}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default SearchResults;