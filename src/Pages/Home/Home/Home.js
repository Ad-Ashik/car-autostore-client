import React from 'react';
import AutoStore from '../AutoStore/AutoStore';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';
import Summarys from '../Summarys/Summarys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-12'><Products></Products></div>
            <div className='px-12'><AutoStore></AutoStore></div>
            <div className='px-12'><Summarys></Summarys></div>
            <div className='px-12'><Brands></Brands></div>
        </div>
    );
};

export default Home;