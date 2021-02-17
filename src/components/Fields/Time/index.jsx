import React from "react";
import PropTypes from 'prop-types';
import styles from './time.module.scss';

const Time = ({ createdAt, editedAt, position }) => {
  const getTime = () => {
    const date = new Date(createdAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds} ${editedAt ? '(edited)': ''}`;
  }

  const stylesByPosition = () => {
    const classes = [styles.time];
    switch(position) {
      case 'right': classes.push(styles.right); break;
      case 'left': classes.push(styles.left); break;
      default: break;
    }
    return classes.join(' ');
  }

  return (
    <div className={stylesByPosition()}>
      {getTime()}
    </div>
  )
};

Time.propTypes = {
  createdAt: PropTypes.string,
  editedAt: PropTypes.string,
  position: PropTypes.string.isRequired
};

export default Time;