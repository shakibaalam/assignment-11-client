import React from 'react';

const Products = ({ pd }) => {
    const { name, price, img, description } = pd
    return (
        <div>
            <h2>Product name:{name}</h2>
        </div>
    );
};

export default Products;