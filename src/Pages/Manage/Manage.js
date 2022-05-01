import React from 'react';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const Manage = ({ pd }) => {
    const { name, price, img, description, supplier, quantity, _id } = pd;
    const handleDelete = () => {

    }
    return (
        <div className="col">
            <div className="card">
                <div className=' d-flex justify-content-between'>
                    <div className='w-75 mx-auto'>
                        <img src={img} className="card-img-top img-style" alt="..." />
                    </div>
                    <div className='text-danger fw-bold fs-5' onClick={handleDelete}><RiDeleteBack2Fill></RiDeleteBack2Fill></div>
                </div>
                <div className="card-body m-3">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description.slice(0, 100)}</p>
                    <p>Quantity: {quantity} kg</p>
                    <p>Supplier: {supplier}</p>
                    <h5>Price :{price} Tk</h5>
                </div>
            </div>
        </div>
    );
};

export default Manage;