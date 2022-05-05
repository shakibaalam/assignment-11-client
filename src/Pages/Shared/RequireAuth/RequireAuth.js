import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div className="text-center mt-5 pt-5">
                <button className='btn bg-danger px-3 py-2 text-white' onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
                >Verify your email first</button>

                <ToastContainer></ToastContainer>
            </div>
        );
    }


    return children;
};

export default RequireAuth;