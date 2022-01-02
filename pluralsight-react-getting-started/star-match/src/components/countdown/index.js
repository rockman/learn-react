
import { useState, useEffect, useRef } from "react"

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Countdown = ({ handleTimeRanOut }) => {

    const [count, setCount] = useState(10);

    function down() {
        if (count > 0) {
            setCount(count - 1)
        } else {
            handleTimeRanOut();
        }
    }

    useInterval(down, 1000);

    return (
        <p className="text-center mt-1">
            Time Remaining: {count}
        </p>
    )
}


export default Countdown;