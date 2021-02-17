import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({iconClass, title, className, onClick}) => {
  return (
    <button 
      className={`${styles.sendBtn} ${className}`}
      onClick={onClick}>
      <i className={`fas ${iconClass}`}></i>  
      {title}
    </button>
  )
};

Button.propTypes = {
  iconClass: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  iconClass: 'fa-arrow-alt-circle-up',
  title: 'Send',
  className: '',
  onClick: () => {}
}

export default Button;