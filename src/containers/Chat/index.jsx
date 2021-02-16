import React from "react";
import MessageInput from "../MessageInput";
import MessageList from "../MessageList";
import Header from '../Header';
import styles from './chat.module.scss';

const Chat = props => {
  return (
    <div className={styles.chatContainer}>
      <Header />
      <MessageList />
      <MessageInput />
    </div>
  )
};

export default Chat;