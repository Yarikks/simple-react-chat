import React from "react";
import PropTypes from 'prop-types';
import styles from './username.module.scss';

const Username = ({ user, position }) => {

  const stylesByPosition = () => {
    const classes = [styles.username];
    switch(position) {
      case 'right': classes.push(styles.right); break;
      case 'left': classes.push(styles.left); break;
      default: break;
    }
    return classes.join(' ');
  }

  return (
    <div className={stylesByPosition()}>
      <p>{user ? user : 'no-name'}</p>
    </div>
  )
};

Username.propTypes = {
  user: PropTypes.string,
  position: PropTypes.string.isRequired
};

export default Username;