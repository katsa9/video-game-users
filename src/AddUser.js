import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddUser extends Component {
  state = {
    user: {
      name: "",
      surname: "",
      username: ""
    },
    userExists: false,
  }

  inputIsEmpty = () => {
    return this.state.name === "" || this.state.surname === "" || this.state.username === "";
  }

  handleSubmit = event => {
    event.preventDefault();
    const userExists2 = this.checkUserExists(this.state.user.username);
    if(!userExists2) {
      this.props.onAdd(this.state.user);
    } 

    /**Can also be written by object destructuring because the variable we are using has the same name as the object field.
     this.setState(() => ({
      userExists,
    }));
    */
    this.setState({
      userExists: userExists2,
    });
  }

  checkUserExists = currentUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currentUsername) {
        return true;
      }
    }
    return false;
  }


  handleInputChange = event => {
    const { name, value } = event.target;

    /**
     * This is using the rest parameter to say, take the fields of the object (i.e. user{} and userExists) and merge it with the given object(user). This is then done another level down as well to take the rest of the fields of the user object and update the single field. This is done by getting the object field like this: [name]
     * 
     */
    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value, 
      },
    }));
  };

  render () {
    const { name, surname, username } = this.state.user;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text"
              placeholder="Enter the name"
              name="name"
              value={name}
              onChange={this.handleInputChange}>
            </input>
          </div>
          <div>
            <label>Surname</label>
            <input type="text"
              placeholder="Enter the surname"
              name="surname"
              value={surname}
              onChange={this.handleInputChange}>
            </input>
          </div>
          <div>
            <label>Username</label>
            <input type="text"
              placeholder="Enter the username"
              value={username}
              name="username"
              onChange={this.handleInputChange}>
            </input>
          </div>
        <button
          disabled={this.inputIsEmpty()}>
          Add User
        </button>
        </form>
       {this.state.userExists ? (
        <p className="error">"The specified user already exists"</p>)
        : (
        ""
        )}
      </div>
    );
  }
}

AddUser.propTypes = {
  onAdd: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}
export default AddUser;