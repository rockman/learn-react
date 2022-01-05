
import { useRef, useEffect } from "react"

export default function ImageScroll({ index, offImg, onImg }) {

    const imgRef = useRef();

    function imgPath(imageName) {
        return `/static/images/${imageName}.png`
    }

    function handleScroll() {
        const rect = imgRef.current.getBoundingClientRect();
        const isFullyVisible = (rect.top >= 0) && (rect.bottom <= window.innerHeight);
        const desiredImg = isFullyVisible ? imgPath(onImg) : imgPath(offImg);
        const currentImg = imgRef.current.src;
        if (desiredImg !== currentImg) {
            imgRef.current.src = desiredImg;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <img 
            src={imgPath(offImg)}
            ref={imgRef}
            alt='Off Image' 
        />
    )

}