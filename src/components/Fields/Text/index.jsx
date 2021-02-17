import React from "react";
import PropTypes from 'prop-types';
import styles from './text.module.scss';

const Text = ({ text, position }) => {

  const stylesByPosition = () => {
    const classes = [styles.text];
    switch(position) {
      case 'right': classes.push(styles.right); break;
      case 'left': classes.push(styles.left); break;
      default: break;
    }
    return classes.join(' ');
  }

  return (
    <div className={stylesByPosition()}>
      <p>{text}</p>
    </div>
  )
};

Text.propTypes = {
  text: PropTypes.string,
  position: PropTypes.string.isRequired
};

export default Text;