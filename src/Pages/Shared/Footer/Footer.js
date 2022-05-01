import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-style text-white mt-5 w-100 bg-dark p-5'>
            <div className='row'>
                <div className='col-md-4 ps-5'>
                    <h2>Grocery Stock</h2>
                    <p>We are a young driller looking for new and creative ideas to help you with our products in your everyday necessary.</p>
                    <p className='text-success'>Our Team</p>
                </div>
                <div className='col-md-4 ps-5'>
                    <h2>Contact</h2>
                    <p><IoLocationOutline /> Via Roshini 10,10136 Turin</p>
                    <p><BsTelephone /> Phone: +8801613387332</p>
                    <p><MdOutlineEmail /> Email: shakibaalam092@gmail.com</p>
                </div>
                <div className='col-md-4 ps-5'>
                    <h2>Links</h2>
                    <p><Link className='text-decoration-none text-white' to='/'>Home</Link></p>
                    <p><Link className='text-decoration-none text-white' to='/manage'>Manage</Link></p>
                    <p><Link className='text-decoration-none text-white' to='/add'>Add</Link></p>
                    <p><Link className='text-decoration-none text-white' to='/blog'>Blog</Link></p>
                </div>
            </div>
            <p className='text-center mt-5'>Copyright @{year}</p>
        </div>
    );
};

export default Footer;