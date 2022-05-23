import React from 'react';
import AutoStore from '../AutoStore/AutoStore';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-12'><Products></Products></div>
            <div className='px-12'><AutoStore></AutoStore></div>
        </div>
    );
};

export default Home;