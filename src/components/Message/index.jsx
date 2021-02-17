import React, { useState } from "react";
import Time from "../Fields/Time";
import Text from "../Fields/Text";
import Username from "../Fields/Username";
import styles from './message.module.scss';
import Avatar from "../Fields/Avatar";
import LikeBtn from "../Fields/LikeBtn";
import IconBtn from "../IconBtn";

const Message = ({ message, deleteMessage, editMessage }) => {
  const { id, avatar, user, text, createdAt, editedAt, self } = message;
  const [editMode, setEditMode] = useState(false);
  const [editedMessage, setEditedMessage] = useState(text);
  const position = self ? 'right' : 'left';

  const stylesByPosition = () => {
    const classes = [styles.messageContainer];
    switch(position) {
      case 'right': classes.push(styles.right); break;
      case 'left': classes.push(styles.left); break;
      default: break;
    }
    return classes.join(' ');
  }

  const handleEditMessage = () => {
    editMessage(id, editedMessage);
    setEditMode(false);
  }

  return (
    <div className={stylesByPosition()}>
      { self
        ? (
          <div className={styles.controlBtnGroup}>
            <IconBtn 
              iconClasses={'far fa-edit'} 
              className={styles.editBtn} 
              onClick={() => setEditMode(!editMode)} 
            />
            <IconBtn 
              iconClasses={'far fa-trash-alt'} 
              className={styles.deleteBtn} 
              onClick={() => deleteMessage(id)} 
            />
          </div>
          )
        : null
      }
      <Username user={user} position={position} />
      { editMode
        ? <div className={styles.editMode}>
          <textarea value={editedMessage} onChange={e => setEditedMessage(e.target.value)} />
          <button onClick={handleEditMessage}><i className="fas fa-check"></i></button>
        </div>
        : <Text text={text} position={position} />
      }
      <Time createdAt={createdAt} editedAt={editedAt} position={position} />
      <Avatar src={avatar} position={position} />
      <LikeBtn position={position} likeCount={0} self={self} />
    </div>
  )
};

export default Message;