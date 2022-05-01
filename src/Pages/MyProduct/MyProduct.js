import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='mt-5 pt-5'>
            <h2>User:{user?.name}</h2>
        </div>
    );
};

export default MyProduct;