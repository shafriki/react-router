import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CommentDetails = () => {
    const comment = useLoaderData()
    const {id, name, email, body} = comment;
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default CommentDetails;