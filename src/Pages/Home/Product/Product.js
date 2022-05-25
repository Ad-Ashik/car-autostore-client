import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, minimum, available, price, img } = product;
    const navigate = useNavigate();

    const updateProduct = id => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-t-md rounded-r-md mb-10">
            <figure><img src={img} alt="Shoes" className='shadow-2xl border-2 rounded' /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="text-secondary">Min: {minimum}pc</h2>
                    <h2 className="text-secondary">Total: {available}pc</h2>
                </div>
                <h2 className="card-title mt-3">{name}</h2>
                <h2><span className='text-xl font-bold text-secondary'>${price}pc</span></h2>
                <p className='text-secondary mb-4'>{description}</p>
                <div className="card-actions w-full">
                    <button onClick={() => updateProduct(_id)} className="btn btn-success w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;