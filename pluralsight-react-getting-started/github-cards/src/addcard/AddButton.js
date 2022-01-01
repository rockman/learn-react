
import React from "react";

class AddButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();        
        this.props.handleClick();
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.handleClick}>Add</button>
        )
    }

}


export default AddButton;