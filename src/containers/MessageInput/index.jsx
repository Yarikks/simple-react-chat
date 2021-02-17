import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import SendButton from "../../components/SendButton";
import styles from './messageInput.module.scss';

const MessageInput = ({ onAddMessage }) => {
  const [text, setText] = useState('');

  const addMessage = () => {
    let message = text.trim();
    if(message) {
      const data = {
        id: uuid(),
        userId: uuid(),
        avatar: "",
        user: "",
        text: message,
        createdAt: new Date(Date.now()).toLocaleString(),
        editedAt: "",
        self: true
      }
      onAddMessage(data);
      setText('');
    }
  }
  return (
    <div className={styles.inputContainer}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your message..." />
      <SendButton 
        iconClass="fa-arrow-alt-circle-up" 
        title="Send"
        onClick={addMessage}
      />
    </div>
  )
};

export default MessageInput;