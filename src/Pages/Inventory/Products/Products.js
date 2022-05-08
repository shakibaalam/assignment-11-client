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
            <div className="card h-100 shadow-lg card-style">
                <div className='mx-auto'>
                    <img src={img} className="card-img-top img-style" alt="..." />
                </div>
                <div className="card-body m-3">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.slice(0, 90)}</p>
                    <p className='fw-bold'>Quantity: {quantity} kg</p>
                    <p>Supplier: {supplier}</p>
                    <h5>Price : <span className='text-danger fw-bold'>{price}</span> <small>Tk/kg</small></h5>
                    <button onClick={() => navigateProduct(_id)} className='btn btn-link btn-style mt-4'>Stock manage</button>
                </div>
            </div>
        </div>
    );
};

export default Products;