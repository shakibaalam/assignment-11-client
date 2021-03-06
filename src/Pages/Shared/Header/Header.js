import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className='nav-style'>
                <Container>
                    <Navbar.Brand><Link className='text-decoration-none fw-bold fs-2 logo-style' to='/home'>Grocery-Stock</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                user &&
                                <Nav.Link><CustomLink to='/my'>My-product</CustomLink></Nav.Link>
                            }

                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link><CustomLink to='/manage'>Manage</CustomLink></Nav.Link>
                                    <Nav.Link><CustomLink to='/add'>Add</CustomLink></Nav.Link>
                                </>
                            }
                            <Nav.Link><CustomLink to='/blog'>Blog</CustomLink></Nav.Link>
                            {
                                user ? <Nav.Link onClick={handleSignout} as={Link} to='/login'>
                                    SignOut
                                </Nav.Link> :
                                    <Nav.Link as={Link} to='/login'>
                                        SignIn
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;