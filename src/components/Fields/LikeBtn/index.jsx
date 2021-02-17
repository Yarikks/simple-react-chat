import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './likeBtn.module.scss';

const LikeBtn = ({ position, likeCount, self }) => {
  const [likes, setLikes] = useState(likeCount);
  const [liked, setLiked] = useState(false);
  const [likeStyle, setLikeStyle] = useState('far');

  const stylesByPosition = () => {
    const classes = [styles.likeBtn];
    switch(position) {
      case 'right': classes.push(styles.right); break;
      case 'left': classes.push(styles.left); break;
      default: break;
    }
    return classes.join(' ');
  }

  const setLike = () => {
    if(!self) {
      if(!liked) {
        setLikes(prev => prev +1);
        setLiked(true);
        setLikeStyle('fas');
      } else {
        setLikes(prev => prev - 1);
        setLiked(false);
        setLikeStyle('far');
      }
    }
  }

  return (
    <div className={stylesByPosition()} onClick={setLike}>
      <span>{likes > 0 ? likes : ''}</span>
      <i style={{color: liked ? '#494cff' : 'black'}} className={`${likeStyle} fa-heart`}></i>
    </div>
  )
};

LikeBtn.propTypes = {
  position: PropTypes.string.isRequired,
  likeCount: PropTypes.number,
  self: PropTypes.bool
};

export default LikeBtn;