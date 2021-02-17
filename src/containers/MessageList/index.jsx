import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import Message from "../../components/Message";
import styles from './messageList.module.scss';
import DateDivider from "../../components/DateDivider";

const MessageList = ({ messages, onDelete, onEdit }) => {
  const lastMessageRef = useRef(null);

  const showMessage = (message, index) => {
    const prevDate = index > 0 
    ? new Date(messages[index-1].createdAt).toLocaleDateString()
    : new Date(messages[0].createdAt).toLocaleDateString();

    const currDate = new Date(message.createdAt).toLocaleDateString();
    if(prevDate === currDate)
    {
      return (
        <div key={index} style={{display: 'grid'}} ref={lastMessageRef}>
          <Message message={message} deleteMessage={onDelete} editMessage={onEdit} />
      </div>
      )
    } else {
      return (
        <div key={index} style={{display: 'grid'}} ref={lastMessageRef}>
          <DateDivider date={currDate} />
          <Message message={message} deleteMessage={onDelete} editMessage={onEdit} />
        </div>
      );
    }
  }

  useEffect(() => {
    if(lastMessageRef) {
      lastMessageRef.current?.scrollIntoView();
    }
  }, [messages])

  return (
    <div className={styles.listContainer}>
      { messages
        ? messages.map(showMessage)
        : <div>Loading...</div>
      }
    </div>
  )
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessageList;