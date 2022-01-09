const SpeakerDetail = ({id, firstName, lastName, favourite, handleFavouriteClick}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    <span>{firstName} {lastName}</span>
                </h4>
                <button onClick={e => {
                    e.preventDefault();
                    handleFavouriteClick(id);
                }}>
                    <span>{ favourite ? "[FAV]" : "[..]" }</span>
                </button>
            </div>
        </div>
    );
}
 
export default SpeakerDetail;