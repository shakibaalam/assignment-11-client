import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const handleAdd = (e) => {
        e.preventDefault();
        const email = e.target.formBasicEmail.value;
        const img = e.target.formBasicImg.value;
        const name = e.target.formBasicName.value;
        const description = e.target.formBasicDescription.value;
        const quantity = e.target.formBasicAmount.value;
        const sold = e.target.formBasicSold.value;
        const supplier = e.target.formBasicSupplier.value;
        const price = e.target.formBasicNumber.value;
        console.log(img, name, description, quantity, supplier, price);

        const data = { email, img, name, description, quantity, supplier, price, sold };
        const url = `https://guarded-stream-31463.herokuapp.com/products`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        alert('Added item successfully')
        e.target.reset();
    }
    return (
        <div className='container mt-5 pt-5 form-style pb-5'>
            <h2 className='text-center my-4'>Add new item....</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleAdd}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" value={user?.email} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Control type="text" placeholder='img url' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder='item name' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Control type="text" placeholder='item description' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAmount">
                        <Form.Control type="number" placeholder="quantity" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSold">
                        <Form.Control type="number" value={"0"} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSupplier">
                        <Form.Control type="text" placeholder='supplier name' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Control type="number" placeholder="price" required />
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