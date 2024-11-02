import React from 'react';
import { Link } from "react-router-dom";

const Photo = ({photo}) => {
    const {id, url} = photo;
    return (
        <div>
            <p>{id}</p>
            {url}
            <Link to={`/photo/${id}`}>Show Detail</Link>
        </div>
    );
};

export default Photo;