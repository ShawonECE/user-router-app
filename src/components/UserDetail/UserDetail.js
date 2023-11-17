import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
  }, []);
    const {email, phone, name, address} = user;
    return (
        <div>
            {
                address &&
                <>
                    <h1>Name: {name} </h1>
                    <h4>Email: {email}</h4>
                    <h4>Address: {address.street}, {address.city}</h4>
                    <h4>Phone No.: {phone}</h4>
                </>
            }
        </div>
    );
};

export default UserDetail;