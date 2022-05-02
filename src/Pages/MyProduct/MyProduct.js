import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        const getAdd = async () => {
            const email = user.email;
            const url = `http://localhost:5000/newProducts?email=${email}`
            try {
                fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setMyItem(data));
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
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