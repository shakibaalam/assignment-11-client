import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../../Hooks/useProductDetail';
import CustomLink from '../../Shared/CustomLink/CustomLink';

const InventoryPage = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    const { name, price, img, description, supplier } = product;

    const [q, setQ] = useState([]);
    const [s, setS] = useState([]);
    useEffect(() => {
        const url = `https://guarded-stream-31463.herokuapp.com/products/${productId}/quantity`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setQ(data.quantityCount);
                setS(data.soldCount);
            });
    }, [productId]);

    const handleDeliver = () => {
        const sold = (parseInt(s) + 1).toString();
        console.log(sold);
        const count = (q - 1).toString();
        console.log(count);
        const update = { count, sold };
        // console.log(update);
        const url = `https://guarded-stream-31463.herokuapp.com/products/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.count);
                setQ(parseInt(data.count))
                setS(parseInt(data.sold))
            })
    };

    const handleRestock = (e) => {
        e.preventDefault();
        const amount = parseInt(e.target.formBasicPassword.value)
        console.log(amount);
        const count = (q + amount).toString()
        const update = { count };
        console.log(update);
        const url = `https://guarded-stream-31463.herokuapp.com/products/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(parseInt(data.count));
                setQ(parseInt(data.count))
            })
        e.target.reset()
    }
    return (
        <div className="container mt-5 form-style">
            <div className="row ">
                <div className="col-md-6" >
                    <div class="mt-5">
                        <div classNameName="col">
                            <div classNameName="card">
                                <div className='w-50 mx-auto '>
                                    <img src={img} className="card-img-top img-style" alt="..." />
                                </div>
                                <div className="card-body m-3">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className='fw-bold'>Quantity: {q} kg</p>
                                    <p>Sold : {s} kg</p>
                                    <p>Supplier: {supplier}</p>
                                    <h5>Price : <span className='text-danger fw-bold'>{price}</span> <small>Tk/kg</small></h5>

                                    <button onClick={handleDeliver} className='btn btn-link btn-style my-4'>Delivered</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 pt-5 ">
                    <div className='w-50 mx-auto'>
                        <Form onSubmit={handleRestock}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" value={name} readOnly />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number" placeholder="amount" />
                            </Form.Group>
                            <Button className='btn-style' variant="" type="submit">
                                Restock
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <div className='mt-5  d-flex justify-content-center'>
                <CustomLink to='/manage'> <button className='btn btn-link btn-style'>Manage Inventories</button></CustomLink>
            </div>
        </div>
    );
};

export default InventoryPage;
