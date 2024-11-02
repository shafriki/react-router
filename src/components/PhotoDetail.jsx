import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhotoDetail = () => {
    const photo = useLoaderData()
    const {id, title, thumbnailUrl} = photo;
    return (
        <div>
            <p>Photo ID: {id} </p>
            <p>Photo Title: {title} </p>
            <p>Photo ThumbnailUrl: {thumbnailUrl} </p>
        </div>
    );
};

export default PhotoDetail;