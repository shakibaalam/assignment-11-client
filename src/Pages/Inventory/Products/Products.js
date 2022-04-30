import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'

const Products = ({ pd }) => {
    const { name, price, img, description, supplier, quantity, _id } = pd;
    const navigate = useNavigate();
    const navigateProduct = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className="col">
            <div className="card">
                <div className='w-75 mx-auto'>
                    <img src={img} className="card-img-top img-style" alt="..." />
                </div>
                <div className="card-body m-3">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Quantity: {quantity} kg</p>
                    <p>Supplier: {supplier}</p>
                    <h5>Price :{price} Tk</h5>
                    <button onClick={() => navigateProduct(_id)} className='btn btn-link btn-style my-4'>Stock manage</button>
                </div>
            </div>
        </div>
    );
};

export default Products;