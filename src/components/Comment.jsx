import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {
    const navigate = useNavigate();

    const handleShowCommentDetails = () => {
        navigate(`/comment/${id}`)
    }
    const {id,name,email,body} =comment;
    return (
        <div>
            <p>id: {id} </p>
            <p>name: {name} </p>
            <p>email: {email} </p>
            <Link to={`/comment/${id}`}>Show Detail</Link>
            <button onClick={handleShowCommentDetails}>Click me</button>
        </div>
    );
};

export default Comment;