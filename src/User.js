import React from 'react';
import PropTypes from 'prop-types';


const User = (props) => (
    // const displayGamed = showGames === true 
    // ? gameCount
    // : "*";
    <li>
      {props.user.username} played {props.showGames ? props.user.gameCount : "*" } games.
    </li>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
  // gameCount: PropTypes.number.isRequired,
  showGames: PropTypes.bool.isRequired
}

export default User;