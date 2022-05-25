import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams()
    return (
        <div>
            <p>{productId}</p>
            <h2 className='text-cneter py-10'>Purchase Now</h2>
        </div>
    );
};

export default Purchase;