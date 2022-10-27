import React, { useState } from 'react';
import './App.css';
import Post from './Components/Post/Post';
import PostList from './Components/PostList/PostList';
import CreatedPostForm from './Components/CreatedPostForm/CreatedPostForm';
import NavBar from './Components/NavBar/NavBar';


function App() {

const [entries, setEntries] = useState([]);

  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
}

export default App;
