import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddInventory = () => {
    const handleAdd = (e) => {
        e.preventDefault();
        const img = e.target.formBasicImg.value;
        const name = e.target.formBasicName.value;
        const description = e.target.formBasicDescription.value;
        const amount = e.target.formBasicAmount.value;
        const supplier = e.target.formBasicSupplier.value;
        const price = e.target.formBasicNumber.value;
        console.log(img, name, description, amount, supplier, price);

        const data = { img, name, description, amount, supplierName: supplier, price };
        const url = `http://localhost:5000/products`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.target.reset();
    }
    return (
        <div className='container mt-5 pt-5'>
            <h2 className='text-center my-4'>Add new item....</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleAdd}>
                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Control type="text" placeholder='img url' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder='item name' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Control type="text" placeholder='item description' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAmount">
                        <Form.Control type="number" placeholder="amount" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSupplier">
                        <Form.Control type="text" placeholder='supplier name' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control type="number" placeholder="price" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddInventory;