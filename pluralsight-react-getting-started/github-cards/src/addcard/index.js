
import React from "react";
import AddButton from "./AddButton.js"


class AddForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.state = {
            username: ''
        }
    }

    handleAdd() {
        this.props.handleAdd(this.state.username);
        this.setState({ username: '' })
    }

    handleUserChange(event) {
        this.setState({ username: event.target.value })
    }

    render() {

        return (
            <form>
                <div className="row align-items-center mb-3">
                    <div className="col-auto">
                        <label htmlFor="user" className="form-label">User</label>
                    </div>
                    <div className="col-auto">
                        <input 
                            value={this.state.username} 
                            onChange={this.handleUserChange}
                            type="text" 
                            name="user" 
                            className="form-control"
                        />
                    </div>
                    <div className="col-auto">
                        <AddButton handleClick={this.handleAdd} />
                    </div>
                </div>
            </form>
        )
    }

}


export default AddForm;