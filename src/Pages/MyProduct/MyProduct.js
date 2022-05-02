import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        const getAdd = async () => {
            const email = user.email;
            const url = `http://localhost:5000/newProducts?email=${email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setMyItem(data));
        }
        getAdd();
    }, [user])
    return (
        <div className='mt-5 pt-5 container'>
            <h2>User:{user?.displayName}</h2>
            <h3>Email:{user?.email} {user?.emailVerified && <p className='text-danger'>(verified)</p>}</h3>
            <img src={user?.photoURL} alt="" />
            <h5>My Items: {myItem.length}</h5>
        </div>
    );
};

export default MyProduct;