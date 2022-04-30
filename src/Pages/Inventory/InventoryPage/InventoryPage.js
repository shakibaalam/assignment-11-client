import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../Hooks/useProductDetail';

const InventoryPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId);
    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    );
};

export default InventoryPage;