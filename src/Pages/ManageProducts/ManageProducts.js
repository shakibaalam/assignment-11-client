import React from 'react';
import useProduct from '../../Hooks/useProduct';
import Manage from '../Manage/Manage';
import CustomLink from '../Shared/CustomLink/CustomLink';

const ManageProducts = () => {
    const [products] = useProduct();
    return (
        <div className='container mt-5 pt-5'>
            <div className='d-flex justify-content-between'>
                <h2>Manage Product :{products.length}</h2>
                <div className=''>
                    <CustomLink to='/add'> <button className='btn btn-link btn-style'>Add Inventories</button></CustomLink>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-5 mt-5">
                {
                    products.map(pd => <Manage key={pd._id} pd={pd}></Manage>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;