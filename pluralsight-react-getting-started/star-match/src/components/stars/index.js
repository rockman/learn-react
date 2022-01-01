
import Star from "./Star";

const Stars = ({numberOfStars}) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {Array.from({ length: numberOfStars}, (_, i) => <Star key={i} />)}
        </div>
    )
}

export default Stars;
