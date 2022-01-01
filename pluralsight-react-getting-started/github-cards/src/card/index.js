
import React from 'react';
import "./Card.css";

class Card extends React.Component {

    render() {
        const profile = this.props.profile;
        return (
            <div className="card">
                <img src={profile.avatar_url} className="card-img-top" alt="profile"></img>
                <div className="card-body">
                  <h5 className="card-title">{profile.name}</h5>
                  <p className="card-text">{profile.company}</p>
                </div>
          </div>
        )
    }
    
}

export default Card;