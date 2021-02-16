import React from "react";
import styles from './header.module.scss';

const Header = props => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>My chat</div>
      <div className={styles.info}>23 participants</div>
      <div className={styles.info}>53 messages</div>
      <div className={styles.lastMessage}>last message at 14:28</div>
    </div>
  )
};

export default Header;