import "./widget.css";
import PropTypes from 'prop-types';

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

Widget.propTypes = {
    widget: PropTypes.object.isRequired
}
 
export default Widget;