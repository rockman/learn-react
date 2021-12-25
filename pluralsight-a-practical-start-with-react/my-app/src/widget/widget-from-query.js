import { useParams } from "react-router-dom";
import Widget from ".";

const WidgetFromQuery = ({ allWidgets }) => {

    let { id } = useParams();
    id = parseInt(id);

    const widget = allWidgets.find(w => w.id === id);

    if (!widget) {
        return <div>Widget not found!</div>
    }

    return <Widget widget={widget} />;
}
 
export default WidgetFromQuery;