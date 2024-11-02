import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Photo = ({photo}) => {
    const navigate = useNavigate();

    const photosNavigate = () => {
        navigate(`/photo/${id}`)
    }


    const {id, url} = photo;
    return (
        <div>
            <p>{id}</p>
            <p>{url}</p>
            <Link to={`/photo/${id}`}>Show Detail</Link><br></br>
            <button onClick={photosNavigate}>click me</button>
        </div>
    );
};

export default Photo;