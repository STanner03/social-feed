import React, { useState } from 'react';
import './App.css';
import Post from './Components/Post/Post';
import PostList from './Components/PostList/PostList';
import CreatedPostForm from './Components/CreatedPostForm/CreatedPostForm';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [posts, setPosts] = useState();

  return (
    <div>
      <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
