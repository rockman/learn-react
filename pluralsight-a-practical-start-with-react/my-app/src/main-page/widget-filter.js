import { useNavigate } from "react-router-dom";

const WidgetFilter = ({ allWidgets }) => {

    const navigate = useNavigate();

    const values = allWidgets ? Array.from(new Set(
        allWidgets.map((w) => w.value)
    )) : [];
    values.unshift(null);

    function onChange(e) {
        const selectedValue = e.target.value;
        navigate(`/searchresults/${selectedValue}`)
    }

    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for widget with value:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onChange}>
                    {values.map((v) => (
                        <option key={v} value={v}>{v}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
 
export default WidgetFilter;