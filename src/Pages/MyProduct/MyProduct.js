import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import auth from '../firebase.init';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const navigateProduct = id => {
        navigate(`/inventory/${id}`)
    }
    const [myItem, setMyItem] = useState([]);
    useEffect(() => {
        const getAdd = async () => {
            const email = user.email;
            const url = `https://guarded-stream-31463.herokuapp.com/newProducts?email=${email}`
            try {
                fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setMyItem(data));
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getAdd();
    }, [user])

    const handleDelete = (id) => {
        const proceed = window.confirm('Wanna you sure for remove?');
        if (proceed) {
            const url = `https://guarded-stream-31463.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myItem.filter(item => item._id !== id);
                    setMyItem(remaining)
                })
        }
    }
    return (
        <div className='mt-5 pt-5 container mb-4'>
            <div>
                <h2>User:{user?.displayName}</h2>
                <h3>Email:{user?.email} {user?.emailVerified && <p className='text-danger'>(verified)</p>}</h3>
                <img src={user?.photoURL} alt="" />
                <h5>My Items: {myItem.length}</h5>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    myItem.map(data =>
                        <div className="col">
                            <div className="card h-100 shadow-lg">
                                <div className=' d-flex justify-content-between'>
                                    <div className='w-75 mx-auto'>
                                        <img src={data.img} className="card-img-top img-style" alt="..." />
                                    </div>
                                    <div className='text-danger fw-bold fs-5' onClick={() => handleDelete(data._id)}><RiDeleteBack2Fill></RiDeleteBack2Fill></div>
                                </div>
                                <div className="card-body m-3">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.description}</p>
                                    <p>Quantity: {data.quantity} kg</p>
                                    <p>Supplier: {data.supplier}</p>
                                    <h5>Price :{data.price} Tk</h5>
                                    <button onClick={() => navigateProduct(data._id)} className='btn btn-link btn-style my-4'>Stock manage</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyProduct;