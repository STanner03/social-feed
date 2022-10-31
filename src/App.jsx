import React, { useState } from 'react';
import CreatedPostForm from './Components/CreatedPostForm/CreatedPostForm';
import NavBar from './Components/NavBar/NavBar';
import Post from './Components/Post/Post';

function App() {

  const [posts, setPosts] = useState([{name: 'Armando', post: "Shut up Shane, you don't know what you're talking about!!!"}, {name: 'Shane', post: "I love the smell and feeling of fall!!!"}]);

  function addNewPost(post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <body>
        <div>
          <CreatedPostForm addNewPostProperty={addNewPost} />
        </div>
        <div>
          <Post parentPosts={posts} />
        </div>
      </body>
    </div>
  );
}

export default App;
