import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {

  const [likeButton, setLikeButton] = useState("inactive");

  const [dislikeButton, setDislikeButton] = useState("inactive");

  function handleClick1() {
      if(likeButton === "inactive") {
          setLikeButton("active");
          setDislikeButton("inactive");
      }
      else {
          setLikeButton("inactive");
      }
  }

  function handleClick2() {
      if(dislikeButton === "inactive") {
          setDislikeButton("active");
          setLikeButton("inactive");
      }
      else {
          setDislikeButton("inactive");
      }
  }

  return (
    <div className="post-divide">
        <h5 className='partition'>{props.postData.name}</h5>
        <p>{props.postData.post}</p>
      <div className="button-placement">
        <button className={likeButton} onClick={handleClick1}>Like</button>
        <button className={dislikeButton} onClick={handleClick2}>Dislike</button>
      </div>
    </div>
  );
};

export default Post;
