import React from "react";
import PropTypes from 'prop-types';

const IconBtn = ({ className, iconClasses, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <i className={iconClasses}></i>
    </div>
  )
};

IconBtn.propTypes = {
  className: PropTypes.string,
  iconClasses: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default IconBtn;