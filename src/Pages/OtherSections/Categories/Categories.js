import React from 'react';

const Categories = () => {
    return (
        <div className='container text-center'>
            <h2 className=' logo-style'>Our Product Categories</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 fw-bold">
                <div className="col">
                    <div className="card h-100 shadow">
                        <div className="card-body m-3">
                            <p className="card-text">Fruits and Vegetables</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow ">
                        <div className="card-body m-3">
                            <p className="card-text">Meat and Fish</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <div className="card-body m-3">
                            <p className="card-text">cooking</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <div className="card-body m-3">
                            <p className="card-text">Home and Cleaning</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <div className="card-body m-3">
                            <p className="card-text">Pest Control</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow">
                        <div className="card-body m-3">
                            <p className="card-text">Beauty Products</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;