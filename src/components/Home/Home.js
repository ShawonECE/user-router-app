import React from 'react';
import { useEffect, useState } from 'react';
import Users from '../Users/Users.js';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
    return (
        <div>
            {
                users.map(user => <Users user={user}></Users>)
            }
        </div>
    );
};

export default Home;