import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center mt-5 pt-5'>
            <img src="https://kbimages.dreamhosters.com/images/Site_Not_Found_Dreambot.fw.png" alt="" />
            <Link to='/' className='btn btn-primary text-white'>Go to the home page</Link>
        </div>
    );
};

export default NotFound;