import React from "react";
import PropTypes from 'prop-types';
import styles from './avatar.module.scss';

const Avatar = ({ src, position }) => {
  const stylesByPosition = () => {
    const classes = [styles.avatar];
    switch(position) {
      case 'right': classes.push(styles.right); break;
      case 'left': classes.push(styles.left); break;
      default: break;
    }
    return classes.join(' ');
  }

  return (
    <img src={src ? src : 'no-avatar.png'} alt={'avatar'} className={stylesByPosition()} />
  )
};

Avatar.propTypes = {
  src: PropTypes.string,
  position: PropTypes.string.isRequired
};

export default Avatar;