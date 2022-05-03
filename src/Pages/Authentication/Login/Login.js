import React, { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passRef = useRef('');

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, errorReset] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);

    const handleLogIn = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        await signInWithEmailAndPassword(email, pass);
        e.target.reset();
    }

    //for reset pass
    const handleReset = async () => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Sent email for reset password');
        }
        else {
            toast('Provide your email')
        }
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='login-style pt-5'>
            <h1 className='text-center fw-bold mt-5'>Sign In</h1>
            <div className='w-50 mx-auto form-style p-5'>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" />

                        <p className='text-danger text-center'>{error?.message || errorReset?.message}</p>

                        <p >Forget Password?<button onClick={handleReset} className='btn btn-link mb-2 text-decoration-none'>Reset Password</button></p>
                        <ToastContainer></ToastContainer>
                    </Form.Group>

                    <div className='text-center'>
                        {
                            loading && <div class="spinner-grow text-info " role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                    </div>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <hr />
                <p className='text-center'>Are you new here? <Link to='/register' className='text-decoration-none'>Sign up</Link></p>
                <p className='text-center'>or</p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;