
import React from "react";
import AddButton from "./AddButton.js"


class AddForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.textRef = React.createRef();
    }

    handleAdd() {
        this.props.handleAdd(this.textRef.current.value);
    }

    render() {

        return (
            <form>
                <div className="row align-items-center mb-3">
                    <div className="col-auto">
                        <label htmlFor="user" className="form-label">User</label>
                    </div>
                    <div className="col-auto">
                        <input ref={this.textRef} type="text" name="user" className="form-control"></input>
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