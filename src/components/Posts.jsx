import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {

    const posts = useLoaderData()

    return (
        <div>
            <h3>Totoal Posts:{posts.length}</h3>
            {
                posts.map(post => <Post key= {post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;