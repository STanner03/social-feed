import LikeDislikeButton from "../LikeDislikeButton/LikeDislikeButton";

const Post = (props) => {
  return (
    <div className="post-divide">
      <div>
        <h5>{props.postData.name}</h5>
      </div>
      <div>
        <p>{props.postData.post}</p>
      </div>
      <div className="button-placement">
        <LikeDislikeButton />
      </div>
      <hr></hr>
    </div>
  );
};

export default Post;
