import "./widget.css";

const Widget = ({ widget }) => {
    return (
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{widget.name}</h5>
            </div>
            <div className="row">
                <p>{widget.description}</p>
                <p className="value">{widget.value}</p>
            </div>
        </div>
    );
}
 
export default Widget;