
import ImageScroll from "../components/imagescroll";

const ChangeScroll = ({offImg, onImg}) => {
    return (
        <div>
            { Array.from({ length: 5 }, (_, i) =>
                (
                    <div key={i}>
                        <ImageScroll index={i} offImg='off' onImg='on' />
                    </div>
                )
            )}
        </div>
    )
}


export default ChangeScroll;
