import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import Products from '../Products/Products';
import './InventorySection.css'

const InventorySection = () => {
    const [products] = useProduct();
    return (
        <div className='container mt-5'>
            <h2 className='text-center logo-style'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    products.slice(0, 6).map(pd => <Products key={pd._id} pd={pd}></Products>)
                }
                <div className='w-100 d-flex justify-content-end mb-5'>
                    <CustomLink to='/manage'> <button className='btn btn-link btn-style mt-5'>Manage Inventories</button></CustomLink>
                </div>
            </div>
        </div>
    );
};

export default InventorySection;