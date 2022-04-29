import React from 'react';
import useProduct from '../../Hooks/useProduct';

const ManageProducts = () => {
    const [products, setProducts] = useProduct()
    return (
        <div>
            <h2>Manage Product :{products.length}</h2>
        </div>
    );
};

export default ManageProducts;