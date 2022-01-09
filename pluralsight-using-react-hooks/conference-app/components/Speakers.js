
import { useState, useEffect, useContext, useReducer, useCallback } from "react";

import Header from "./Header";
import Menu from "./Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "./App";


const Speakers = () => {

    function speakerListReducer(state, action) {
        switch (action.type) {
            case "setSpeakerList":
                return action.data;

            case "flipFavourite":
                return state.map(i => i.id === action.data
                    ? {...i, favourite: !i.favourite}
                    : i
                );

            default:
                return state;
        }
    }

    const [speakerList, setSpeakerDispatch] = useReducer(speakerListReducer, []);
    const [isLoading, setIsLoading] = useState(true);
    const [showWeekendOnly, setShowWeekendOnly] = useState(false);

    useEffect(() => {

        new Promise(resolve => {
            setTimeout(() => resolve(), 1000);
        }).then(() => setIsLoading(false));

        setSpeakerDispatch({
            type: "setSpeakerList",
            data: SpeakerData
        })

    }, []);

    const handleFavouriteClick = useCallback(
        speakerId => {
            setSpeakerDispatch({
                type: "flipFavourite",
                data: speakerId
            })    
        },
        []
    );

    const context = useContext(ConfigContext);

    if (isLoading) {
        return <p>Loading...</p>
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
            {context.showSpeakingDays ?
            <div className="form-check">
                <input type="checkbox"
                    className="form-check-input"
                    value={showWeekendOnly}
                    id="checkboxWeekend"
                    onChange={handleWeekendCheck}
                />
                <label htmlFor="checkboxWeekend">Weekend Speaker?</label>
            </div>
            : <></>
            }
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