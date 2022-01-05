
import { useRef } from "react"

export default function ImageToggle({ offImg, onImg }) {

    const imgRef = useRef();

    function imgPath(imageName) {
        return `/static/images/${imageName}.png`
    }

    function handleMouseOver() {
        imgRef.current.src = imgPath(onImg)
    }

    function handleMouseOut() {
        imgRef.current.src = imgPath(offImg)
    }

    return (
        <img 
            src={imgPath(offImg)}
            ref={imgRef}
            alt='Off Image' 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        />
    )

}