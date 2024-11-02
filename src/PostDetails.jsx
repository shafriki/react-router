import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const {id, title, body} = post;
    return (
        <div>
            <h2>{id}</h2>
            <p>{title}</p>
            <small>{body}</small>
        </div>
    );
};

export default PostDetails;