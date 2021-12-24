import Widget from "../widget";

const FeaturedWidget = ({ widget }) => {
    if (widget) {
        return (
            <div>
                <div className="row featuredWidget">
                    <h3 className="col-md-12 text-center">Featured Widget</h3>
                </div>
                <Widget widget={ widget }/>
            </div>
        );
    }

    return <div>No featured widget at this time</div>;
}
 
export default FeaturedWidget;