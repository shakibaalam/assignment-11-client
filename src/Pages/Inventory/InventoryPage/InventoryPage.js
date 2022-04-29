import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../Hooks/useProductDetail';

const InventoryPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductDetail(id);
    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    );
};

export default InventoryPage;