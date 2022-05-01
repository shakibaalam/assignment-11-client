import React from 'react';
import InventorySection from '../Inventory/InventorySection/InventorySection';
import Footer from '../Shared/Footer/Footer';
import './Home .css'

const Home = () => {
    return (
        <div>
            <div className='banner'>

            </div>
            <InventorySection></InventorySection>
            <Footer></Footer>
        </div>
    );
};

export default Home;