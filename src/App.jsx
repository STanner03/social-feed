import React, { useState } from 'react';
import './App.css';
import Post from './Components/Post/Post';
import PostList from './Components/PostList/PostList';
import CreatedPostForm from './Components/CreatedPostForm/CreatedPostForm';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [posts, setPosts] = useState([{name: 'Shane', post: "I love the smell and feeling of fall!!!"}]);

  function addNewPost(post){

    let tempPosts =[post, ...posts];

    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatedPostForm addNewPostProperty={addNewPost} />
      <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
