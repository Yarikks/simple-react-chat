import React from "react";
import styles from './header.module.scss';

const Header = ({ messages }) => {
  const messagesCount = messages.length;

  const usersCount = () => {
    const uniqueUsers = [...new Set(messages.map(message => message.userId))];
    return uniqueUsers.length;
  }

  const lastMessage = () => {
    const lastMesage = messages[messages.length - 1];
    if(lastMesage) {
      return new Date(lastMesage.createdAt).toLocaleTimeString();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>My chat</div>
      <div className={styles.info}>{usersCount()} participants</div>
      <div className={styles.info}>{messagesCount} messages</div>
      <div className={styles.lastMessage}>last message at {lastMessage()}</div>
    </div>
  )
};

export default Header;