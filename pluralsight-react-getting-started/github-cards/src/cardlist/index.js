
import React from "react";
import Card from "../card";

class CardList extends React.Component {

    render() {
        return (
            <div>
                { this.props.profiles.map(profile => <Card key={profile.name} profile={profile} />)}
            </div>
        )
    }

}


export default CardList;