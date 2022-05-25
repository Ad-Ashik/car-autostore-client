import React, { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';

const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className='py-20'>
            <h2 className='text-center pb-10 text-2xl font-bold uppercase'>SHOP BY BRANDS</h2>
            <div className='grid gap-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
                {
                    brands.map(brand => <Brand
                        key={brand._id}
                        brand={brand}
                    ></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;