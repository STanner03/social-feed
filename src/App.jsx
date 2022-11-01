import React, { useState } from 'react';
import './App.css';
import CreatedPostForm from './Components/CreatedPostForm/CreatedPostForm';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';

function App() {

  const [posts, setPosts] = useState([{name: 'John', post: "Shut up Shane, you don't know what you're talking about!!!"}, {name: 'Shane', post: "I love the smell and feeling of fall!!!"}]);

  function addNewPost(post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
          <CreatedPostForm addNewPostProperty={addNewPost} />
          <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
