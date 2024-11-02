import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>{id}</h1>
            <p>Title: {title} </p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            {/* <Link to={`/post/${id}`}><button >Details</button></Link> */}
            <button onClick={handleShowDetail}>click me baby</button>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Post;