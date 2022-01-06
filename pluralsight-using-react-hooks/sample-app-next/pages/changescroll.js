
import ImageScroll from "../components/imagescroll";

const ChangeScroll = ({offImg, onImg}) => {
    return (
        <div>
            { Array.from({ length: 1 }, (_, i) =>
                (
                    <div key={i}>
                        <ImageScroll offImg='off' onImg='on' />
                    </div>
                )
            )}
        </div>
    )
}


export default ChangeScroll;
