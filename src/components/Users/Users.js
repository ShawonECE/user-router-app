import React from 'react';
import './Users.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Users = (props) => {
    const{name, email, id} = props.user;
    return (
        <div className='user'>
            <h1>
                <Link to={'/'+id}>{name}</Link>
            </h1>
            <h4>{email}</h4>
        </div>
    );
};

export default Users;