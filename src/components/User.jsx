import React from 'react';
import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className=''>
            <h3>{user.name}</h3>
            <p>Email: {user.email} </p>
            <p>Phone: {user.phone} </p>
            <Link to={`/user/${id}`}>show details</Link>
        </div>
    );
};

export default User;