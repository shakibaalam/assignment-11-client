import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.formBasicEmail.value;
        const pass = e.target.formBasicPassword.value;
        signInWithEmailAndPassword(email, pass);
        e.target.reset();
        console.log(email, pass);

    }
    if (user) {
        // navigate(from, { replace: true });
        navigate('/')
    }
    return (
        <div className='login-style pt-5'>
            <h1 className='text-center fw-bold'>Sign In</h1>
            <div className='w-50 mx-auto form-style p-5'>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />

                        <p >Forget Password?<button className='btn btn-link mb-2 text-decoration-none'>Reset Password</button></p>

                    </Form.Group>

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