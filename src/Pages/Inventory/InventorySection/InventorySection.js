import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import Products from '../Products/Products';
import './InventorySection.css'

const InventorySection = () => {
    const [products, setProducts] = useProduct();
    return (
        <div className='container mt-5'>
            <h2>Inventory {products.length}</h2>
            <div class="row row-cols-1 row-cols-md-3 g-5 mt-5">
                {
                    products.slice(0, 6).map(pd => <Products key={pd._id} pd={pd}></Products>)
                }
                <div className='w-100 d-flex justify-content-end'>
                    <CustomLink to='/manage'> <button className='btn btn-link btn-style'>Stock manage</button></CustomLink>
                </div>
            </div>
        </div>
    );
};

export default InventorySection;