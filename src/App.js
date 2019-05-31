import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList.js';
import AddUser from './AddUser.js';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: []
  }

  addNewUser = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users,user],
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1>User Gaming List</h1>
        <AddUser 
            users={this.state.users}
            onAdd={this.addNewUser}
            />
        <UserList 
        users={this.state.users}
        />
      </div>
    );
  }
}

export default App;
