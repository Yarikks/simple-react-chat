import React, { useEffect, useState } from "react";
import MessageInput from "../MessageInput";
import MessageList from "../MessageList";
import Header from '../Header';
import styles from './chat.module.scss';

const Chat = props => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch('https://edikdolynskyi.github.io/react_sources/messages.json')
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));
      setMessages(result);
    };
    setTimeout(() => {
      getData();
    }, 2000);
  }, [])

  const deleteMessage = (id) => {
    const arrayCopy = [...messages];
    const messageIndex = messages.findIndex((message) => message.id === id);
    const isSure = window.confirm("Are you sure?");

    if(messageIndex !== -1 && isSure) {
      arrayCopy.splice(messageIndex, 1);
      setMessages(arrayCopy);
    }
  }

  const editMessage = (id, text) => {
    const arrayCopy = [...messages];
    const messageIndex = messages.findIndex(message => message.id === id);
    const editedMessage = {
      ...arrayCopy[messageIndex],
      text: text
    }
    arrayCopy[messageIndex] = editedMessage;
    setMessages(arrayCopy);
  }

  if(!messages.length) {
    return (
      <div className={styles.chatContainer}>
        <div className={styles.spiner}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.chatContainer}>
        <Header messages={messages}  />
        <MessageList messages={messages} onDelete={deleteMessage} onEdit={editMessage} />
        <MessageInput onAddMessage={message => setMessages(prev => [...prev, message])} />
      </div>
    )
  }
};

export default Chat;