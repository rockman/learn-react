import React from "react";
import CardList from "./cardlist";
import AddForm from "./addcard";


async function addUser(username) {
  const response = await fetch('https://api.github.com/users/' + username);
  const body = await response.json();
  return {
    name: body.name,
    avatar_url: body.avatar_url,
    company: body.company
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
      profiles: []
    }
  }

  handleAdd(username) {
    addUser(username).then(profile => {
      this.setState({
        profiles: [...this.state.profiles, profile]
      })
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="display-3">The GitHub Card App!</h1>
        </div>
        <AddForm handleAdd={this.handleAdd} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }

}

export default App;
