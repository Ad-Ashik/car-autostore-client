import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Lodaing from '../../Shared/Lodaing/Lodaing';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className='mt-28 mb-20 text-center text-3xl'>BEST SELLERS - {products.length}</h2>
            {
                !products && <Lodaing></Lodaing>
            }
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-20'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;