import Post from "../Post/Post";

const PostList = (props) => {
    return ( 
        <table>
            <tbody>
            {props.parentPosts.map((post) => {
                return (
                <tr>
                    <th>{post.name}</th>
                    <td>{post.post}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}
 
export default PostList;