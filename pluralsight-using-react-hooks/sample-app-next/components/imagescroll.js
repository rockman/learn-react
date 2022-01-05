
import { useRef, useEffect, useState } from "react"

export default function ImageScroll({ offImg, onImg }) {

    const imgRef = useRef();

    const [inView, setInView] = useState(false);

    function imgPath(imageName) {
        return `/static/images/${imageName}.png`
    }

    function isInView() {
        const rect = imgRef.current.getBoundingClientRect();
        return (rect.top >= 0) && (rect.bottom <= window.innerHeight);
    }

    function handleScroll() {
        setInView(isInView())
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <img 
            src={inView ? imgPath(onImg) : imgPath(offImg)}
            ref={imgRef}
            alt='Off Image' 
        />
    )

}