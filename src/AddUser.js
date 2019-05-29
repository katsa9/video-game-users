import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddUser extends Component {
  state = {
    name: "",
    surname: "",
    username: "",
    hasError: false
  }

  inputIsEmpty = () => {
    return this.state.name === "" || this.state.surname === "" || this.state.username === "";
  }

  handleOnAdd = event => {
    const newUser = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username
    }
    if (!this.props.userExists(newUser)) {
      this.props.onAdd(newUser);
    } else {
      //show error
    }
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = event => {
    this.setState({ surname: event.target.value });
  };

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  render () {
    return (
      <div>
        <form onSubmit={this.handleOnAdd}>
          <div>
            <label>Name</label>
            <input type="text"
              placeholder="Enter the name"
              value={this.state.name}
              onChange={this.handleNameChange}>
            </input>
          </div>
          <div>
            <label>Surname</label>
            <input type="text"
              placeholder="Enter the surname"
              value={this.state.surname}
              onChange={this.handleSurnameChange}>
            </input>
          </div>
          <div>
            <label>Username</label>
            <input type="text"
              placeholder="Enter the username"
              value={this.state.username}
              onChange={this.handleUsernameChange}>
            </input>
          </div>
        </form>
        <button
          onClick={this.handleOnAdd}
          disabled={this.inputIsEmpty()}>
          Add User
        </button>
      </div>
    );
  }
}
export default AddUser;