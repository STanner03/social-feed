import './Post.css'

let eachPost;
const Post = (props) => {
    return ( 
        eachPost = props.parentPosts.map((post) => {
            return (
                <div>
                    <div>
                        <h5>{post.name}</h5>
                    </div>
                    <div>
                        <p>{post.post}</p>
                    </div>
                    <button type=''>Like</button>
                    <button>Dislike</button>
                </div>
            );
        })
    );
}
 
export default Post;