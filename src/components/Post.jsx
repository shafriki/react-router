import React from 'react';
import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <h1>{id}</h1>
            <p>Title: {title} </p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button >Details</button></Link>
        </div>
    );
};

export default Post;