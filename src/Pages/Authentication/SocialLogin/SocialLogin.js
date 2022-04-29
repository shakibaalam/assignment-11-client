import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='text-center'>
            <button onClick={() => signInWithGoogle()} className='btn fs-5 fw-bold'><FcGoogle></FcGoogle> Google SignIn</button>
        </div>
    );
};

export default SocialLogin;