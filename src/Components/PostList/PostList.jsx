import Post from "../Post/Post";

const PostList = (props) => {
  const allPosts = props.parentPosts.map((postobj) => (
    <Post postData={postobj} />
  ));

  console.log(props.parentPosts);

  return (
    <div className="box-align">
      <div className="border-box">
        {allPosts}
      </div>
    </div>
  );
};

export default PostList;
