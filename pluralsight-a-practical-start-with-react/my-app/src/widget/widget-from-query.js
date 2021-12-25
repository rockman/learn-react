import { useParams } from "react-router-dom";
import Widget from ".";
import { useContext } from "react";
import WidgetContext from "../context/widgetContext";

const WidgetFromQuery = () => {
    const allWidgets = useContext(WidgetContext);

    let { id } = useParams();
    id = parseInt(id);

    const widget = allWidgets.find(w => w.id === id);

    if (!widget) {
        return <div>Widget not found!</div>
    }

    return <Widget widget={widget} />;
}
 
export default WidgetFromQuery;