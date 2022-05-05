import React from 'react';
import useProduct from '../../Hooks/useProduct';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import CustomLink from '../Shared/CustomLink/CustomLink';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useProduct();
    const navigate = useNavigate();
    const navigateProduct = id => {
        navigate(`/inventory/${id}`)
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Wanna you sure for remove?');
        if (proceed) {
            const url = `https://guarded-stream-31463.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })
        }
    }
    return (
        <div className='container mt-5 pt-5'>
            <div className='d-flex justify-content-between'>
                <h2>Manage Product :{products.length}</h2>
                <div className=''>
                    <CustomLink to='/add'> <button className='btn btn-link btn-style'>Add Inventories</button></CustomLink>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    products.map(pd =>
                        <div className="col">
                            <div className="card h-100 shadow-lg card-style">
                                <div className=' d-flex justify-content-between'>
                                    <div className='w-75 mx-auto'>
                                        <img src={pd.img} className="card-img-top img-style" alt="..." />
                                    </div>
                                    <div className='text-danger fw-bold fs-5' onClick={() => handleDelete(pd._id)}><RiDeleteBack2Fill></RiDeleteBack2Fill></div>
                                </div>
                                <div className="card-body m-3">
                                    <h5 className="card-title">{pd.name}</h5>
                                    <p className="card-text">{pd.description}</p>
                                    <p className='fw-bold'>Quantity: {pd.quantity} kg</p>
                                    <p>Supplier: {pd.supplier}</p>
                                    <h5>Price : <span className='text-danger fw-bold'>{pd.price}</span> Tk (per kg)</h5>
                                    <button onClick={() => navigateProduct(pd._id)} className='btn btn-link btn-style my-4'>Stock manage</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProducts;