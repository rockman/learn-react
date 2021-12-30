const Continue = ({ show, onContinue }) => {
    return (    
        <div className="row">
        {
            show
            ?
            <div className="col-1 offset-10 mt-1">
                <button className="btn btn-primary btn-lg" onClick={onContinue}>Continue</button>
            </div>
            : null
        }
        </div>
    );
}
 
export default Continue;