import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import Products from '../Products/Products';

const InventorySection = () => {
    const [products, setProducts] = useProduct();
    return (
        <div>
            <div id='inventory-section'>
                <h2>Inventory {products.length}</h2>
                {
                    products.map(pd => <Products key={pd._id} pd={pd}></Products>)
                }
                <button className='btn btn-link'> Stock manage</button>
            </div>
        </div>
    );
};

export default InventorySection;