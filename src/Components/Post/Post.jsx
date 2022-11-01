import LikeDislikeButton from "../LikeDislikeButton/LikeDislikeButton";

const Post = (props) => {
  return (
    <div>
      <div>
        <h5>{props.postData.name}</h5>
      </div>
      <div>
        <p>{props.postData.post}</p>
      </div>
      <div className="buttons">
        <LikeDislikeButton />
      </div>
    </div>
  );
};

export default Post;
