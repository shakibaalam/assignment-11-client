import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../Hooks/useProductDetail';

const InventoryPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId);
    let { name, price, img, description, supplier, quantity, _id } = product;

    const [q, setQ] = useState(0);
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}/quantity`
        fetch(url)
            .then(res => res.json())
            .then(data => setQ(data));
    }, [productId]);

    const handleDeliver = () => {
        setQ(q - 1);
    }
    return (
        <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-5 mt-5">
                <div classNameName="col">
                    <div classNameName="card">
                        <div className='w-50 mx-auto '>
                            <img src={img} className="card-img-top img-style" alt="..." />
                        </div>
                        <div className="card-body m-3">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p>Quantity: {q} kg</p>
                            <p>Supplier: {supplier}</p>
                            <h5>Price :{price} Tk</h5>
                            <button onClick={handleDeliver} className='btn btn-link btn-style my-4'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryPage;