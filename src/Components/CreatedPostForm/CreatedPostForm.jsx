import React, { useState } from 'react';

import Post from "../Post/Post";

const CreatedPostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <label>Post</label>
            <input type='text' value={post} onChange={(e) => setPost(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    );
}
 
export default CreatedPostForm;