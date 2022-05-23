import React from 'react';

const Product = ({ product }) => {
    const { name, description, minimum, available, price, img } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl rounded-t-md rounded-r-md mb-10">
            <figure><img src={img} alt="Shoes" className='shadow-2xl border-2 rounded' /></figure>
            <div class="card-body">
                <div className='flex justify-between'>
                    <h2 class="text-secondary">Min: {minimum}pc</h2>
                    <h2 class="text-secondary">Total: {available}pc</h2>
                </div>
                <h2 class="card-title mt-3">{name}</h2>
                <h2><span className='text-xl font-bold text-secondary'>${price}pc</span></h2>
                <p className='text-secondary mb-4'>{description}</p>
                <div class="card-actions w-full">
                    <button class="btn btn-success w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;