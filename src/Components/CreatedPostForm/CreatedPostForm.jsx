import React, { useState } from 'react';

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
            <div className='box-align'>
                <div className='border-box'>
                    <div>
                        <label><b>Name</b></label>
                        <input className='form-control' rows={1} type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label><b>Post</b></label>
                        <textarea className='form-control' rows={5} value={post} onChange={(e) => setPost(e.target.value)} />
                        <div className='button-placement'>
                            <button type="submit">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default CreatedPostForm;