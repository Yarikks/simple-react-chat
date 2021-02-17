import React from 'react';
import styles from './dateDivider.module.scss';

const DateDivider = ({ date }) => {
  return (
    <div className={styles.divider}>
      <span></span>
      <span>{date}</span>
      <span></span>
    </div>
  )
};

export default DateDivider;