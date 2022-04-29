import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.formBasicEmail.value;
        const pass = e.target.formBasicPassword.value;
        createUserWithEmailAndPassword(email, pass)
        e.target.reset();
        console.log(email, pass);

    }
    if (user) {
        navigate('/');
    }
    return (
        <div className='login-style pt-5'>
            <h1 className='text-center fw-bold'>Sign Up</h1>
            <div className='w-50 mx-auto form-style p-5'>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <hr />
                <p className='text-center'>Already have an account? <Link to='/login' className='text-decoration-none'>Sign In</Link></p>
                <p className='text-center'>or</p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;