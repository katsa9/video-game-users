import React, {Component} from 'react';
import AddUser from './AddUser.js';
import User from './User.js';
// import PropTypes from 'prop-types';

class UserList extends Component {
    state = {
        users: [],
        gamesHidden: false
    }

    gamesShownHandler = () => {
      this.setState(previousState => (
        this.gamesHidden = !previousState
      ));
    }

    onAddUser = (newUser) => {
      this.setState(previousState => ({users: [...previousState.users, newUser]}));
    }

    checkUserExists = (userToCheck) => {
      console.log("check user");
    }

    render() {
        return (
          <div>
            <AddUser 
            onAdd={this.onAddUser}
            userExists={this.checkUserExists}
            />
            <ol>
              {this.state.users.map((item, index) => <User key={index} user={item} showGames={this.state.gamesHidden}/>)}
            </ol>
            <button onClick={this.gamesShownHandler}>{this.state.gamesHidden === true ?
              "Show games" : "Hide games"}</button>
          </div>
        );
    };
}

export default UserList;