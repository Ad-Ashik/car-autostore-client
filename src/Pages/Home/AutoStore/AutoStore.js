import React from 'react';

const AutoStore = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/0Z8vbTP/banner30.jpg" class="lg:w-2/4 object-cover rounded-lg " alt='' />
                <div className='relative' style={{ top: "-50px" }}>
                    <h1 class="text-5xl font-bold">Welcome to Autostore</h1>
                    <hr className='w-52 relative left-2 top-1 border-red-400 border-2' />
                    <h2 className='text-2xl mt-6'>Autostore is the leading US auto parts distributor.</h2>
                    <p class="py-6 text-secondary">Since its founding we become an integral part of the city, advancing our mission of the providing access to compassionate care to our communities. today patient find care that combines world-class medincine with compassion.</p>
                    <div className='relative text-sm'>
                        <p className='left-4 relative '> <span className='absolute' style={{
                            left: "-24px", top: "9px"
                        }}>✅</span> Intralogistics robotics cover a range of technologies and uses. Find out what's right for your business in this new market guide from Gartner.</p>
                        <p className='py-4 left-4 relative'><span className='absolute' style={{
                            left: "-24px", top: "24px"
                        }}>✅</span> The AutoStore™ Consumer Report 2021 uses insights drawn from an online survey of 8,737 customers conducted in partnership with YouGov.</p>
                        <p className='left-4 relative'><span className='absolute' style={{
                            left: "-24px", top: "9px"
                        }}>✅</span> Micro-fulfillment centers (MFCs) provide a dedicated space for grocers to store and process goods to be sold online.</p>
                    </div>
                    <button class="btn btn-success mt-6">Check Products</button>
                </div>

            </div>
        </div>
    );
};

export default AutoStore;