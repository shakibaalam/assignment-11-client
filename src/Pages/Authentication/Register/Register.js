import { sendEmailVerification } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [error1, setError1] = useState('')

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.formBasicEmail.value;
        const pass = e.target.formBasicPassword.value;
        const confirmPass = e.target.formBasicConfirmPassword.value;
        if (pass === confirmPass) {
            createUserWithEmailAndPassword(email, pass)
            navigate('/');
        }
        else {
            setError1("password didn't match");
        }
        e.target.reset();
    }

    return (
        <div className='login-style pt-5'>
            <h1 className='text-center fw-bold mt-5'>Sign Up</h1>
            <div className='w-50 mx-auto form-style p-5'>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <p className='text-danger text-center'>{error1 || error?.message}</p>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className='text-center'>
                        {
                            loading && <div class="spinner-grow text-info " role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                    </div>

                </Form>
                <hr />
                <p className='text-center'>Already have an account? <Link to='/login' className='text-decoration-none'>Sign In</Link></p>
                <p className='text-center'>or</p>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;