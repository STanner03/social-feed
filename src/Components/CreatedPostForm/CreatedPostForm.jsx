import React, { useState } from 'react';
import './CreatedPostForm.css'

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
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Post</label>
                <input type='text' value={post} onChange={(e) => setPost(e.target.value)} />
                <button type="submit">Create</button>
            </div>
        </form>
    );
}
 
export default CreatedPostForm;