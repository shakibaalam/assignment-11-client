import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div className='mt-5 pt-5 container'>
            <h2>User:{user?.displayName}</h2>
            <h3>Email:{user?.email} {user?.emailVerified && <p className='text-danger'>(verified)</p>}</h3>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default MyProduct;