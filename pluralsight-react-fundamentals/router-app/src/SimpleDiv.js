import { useParams } from "react-router-dom";

const SimpleDiv = ({ message }) => {
    const params = useParams();
    const result = message + (params.id ? params.id : "");
    return (
        <div>{ result }</div>
    );
}
 
export default SimpleDiv;