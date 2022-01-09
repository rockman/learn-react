
import { useState, useEffect } from "react";

import Header from "./Header";
import Menu from "./Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";


const Speakers = () => {

    const [speakerList, setSpeakerList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showWeekendOnly, setShowWeekendOnly] = useState(false);

    useEffect(() => {

        new Promise(resolve => {
            setTimeout(() => resolve(), 1000);
        }).then(() => setIsLoading(false));
        setSpeakerList(SpeakerData);

    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    function handleFavouriteClick(speakerId) {
        setSpeakerList(speakerList.map(i => i.id === speakerId
            ? {...i, favourite: !i.favourite}
            : i
        ))
    }

    function handleWeekendCheck() {
        setShowWeekendOnly(!showWeekendOnly);
    }

    const filteredSpeakers = showWeekendOnly
        ? speakerList.filter(i => i.weekend)
        : speakerList;

    return (
        <div>
            <Header />
            <Menu />
            <div className="form-check">
                <input type="checkbox"
                    className="form-check-input"
                    value={showWeekendOnly}
                    id="checkboxWeekend"
                    onChange={handleWeekendCheck}
                />
                <label htmlFor="checkboxWeekend">Weekend Speaker?</label>
            </div>
            <div className="container">
                <div className="row">
                    {filteredSpeakers.map(item => 
                        <SpeakerDetail key={item.id} {...item} handleFavouriteClick={handleFavouriteClick} />)}
                </div>
            </div>
        </div>
    );
}
 
export default Speakers;