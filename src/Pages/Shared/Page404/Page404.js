import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='flex justify-center items-center h-screen' >
            <div className='font-bold text-white block' style={{
                textShadow: '-0.0625rem 0 #fe696a, 0 0.0625rem #fe696a, 0.0625rem 0 #fe696a, 0 -0.0625rem #fe696a',
                fontSize: '10rem'
            }}>
                <p>404</p>
            </div>
            <div className='text-xl bg-success py-4 px-10 cursor-pointer rounded-lg ml-5'>
                <Link to="/">
                    <p className="text-white font-bold uppercase "><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> home</p>
                </Link>
            </div>
        </div>
    );
};

export default Page404;