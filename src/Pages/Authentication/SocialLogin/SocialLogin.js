import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        const from = location?.state?.from?.pathname || "/";
        navigate(from, { replace: true });
    }
    return (
        <div className='text-center'>
            <div className='text-center'>
                {
                    loading && <div class="spinner-grow text-info " role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                }
            </div>
            <button onClick={() => signInWithGoogle()} className='btn fs-3 fw-bold'><FcGoogle></FcGoogle> Google SignIn</button>

            <p className='text-danger'>{error ? error.message : ''}</p>
        </div>
    );
};

export default SocialLogin;