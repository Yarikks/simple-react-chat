import React from "react";
import styles from './messageInput.module.scss';

const MessageInput = props => {
  return (
    <div className={styles.inputContainer}>
      <textarea />
      <button className={styles.sendBtn}>
        <i class="fas fa-arrow-alt-circle-up"></i>  
        Send
      </button>
    </div>
  )
};

export default MessageInput;