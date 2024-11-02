import React from 'react';
import { Link } from 'react-router-dom';

const Comment = ({comment}) => {
    const {id,name,email,body} =comment;
    return (
        <div>
            <p>id: {id} </p>
            <p>name: {name} </p>
            <p>email: {email} </p>
            <Link to={`/comment/${id}`}>Show Detail</Link>
        </div>
    );
};

export default Comment;