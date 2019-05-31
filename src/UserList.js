import React, {Component} from 'react';
import User from './User.js';
// import PropTypes from 'prop-types';

class UserList extends Component {
    state = {
        showGamesPlayed: true
    }

    toggleGamesShown = () => {
      this.setState(previousState => ({
        showGamesPlayed: !previousState.showGamesPlayed
      }));
    };

    onAddUser = (newUser) => {
      this.setState(previousState => ({users: [...previousState.users, newUser]}));
    }

    checkUserExists = (userToCheck) => {
      console.log("check user");
    }

    render() {
      const {showGamesPlayed } = this.state;
      const {users} = this.props;

      const gamesPlayedButton = (
        <div>
        <button className="smallButton" onClick={this.toggleGamesShown}>
          {showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
        </div>
      );

        return (
          <div>
          <h1>Users</h1>
          {users && users.length > 0 ? gamesPlayedButton : ''} 
            <ol>
              {users.map(user => <User key={user.username} user={user} showGamesPlayed={showGamesPlayed}/>)}
            </ol>
          </div>
        );
    };
}

export default UserList;