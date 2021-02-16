import React from "react";
import styles from './logo.module.scss';

const Logo = props => {
  return (
    <div className={styles.logoContainer}>
      <img src="chat-icon.png" alt="chat"/>
      <div className={styles.logoName}>Super Chat</div>
    </div>
  )
};

export default Logo;