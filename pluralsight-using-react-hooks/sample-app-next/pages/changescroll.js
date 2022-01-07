
import { useState, useEffect } from "react";
import ImageScroll from "../components/imagescroll";

const ChangeScroll = ({offImg, onImg}) => {

    const [currentId, setCurrentId] = useState(-1);
    const [mouseEventCount, setMouseEventCount] = useState(0);

    useEffect(() => {
        document.title = `Viewing item ${currentId}`;
    }, [currentId]);

    return (
        <div>
            <p>Mouse Over Event Count: {mouseEventCount}</p>
            { Array.from({ length: 10 }, (_, i) =>
                (
                    <div
                      key={i}
                      onMouseOver={() => {
                          setCurrentId(i);
                          setMouseEventCount(mouseEventCount + 1);
                      }}
                    >
                        <ImageScroll offImg='off' onImg='on' />
                    </div>
                )
            )}
        </div>
    )
}


export default ChangeScroll;
