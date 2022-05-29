import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center mx-auto p-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl flex-1 ">
                <figure><img className='w-96' src="https://i.ibb.co/Kwh3f3g/Ashik-64d88be03e0816669a95.jpg" alt="Album" /></figure>
                <div className="card-body flex-1 ">
                    {/* <h2 className="">My Goal</h2>
                    <p>আমি গত (চার-পাচ) বছর ধরে একজন web-developer হতে চাইছিলাম। মধ্যবিত্ত জীবনটাকে web-developer এর আদলে সুন্দর করতে চেয়েছি। অনেক গুলো স্বপ্ন ঘিরে রয়েছে এই developing নিয়ে। তার একটাও পূরণ হয়নি এখনো। তবে হ্যা, আমি current year এর মধ্যে কোন একটা web-developer company তে job করতে চাই। এটাই এখন আমার লক্ষ্য। </p> */}
                    <div className='leading-10'>
                        <p className='text-center font-bold text-xl'>My information</p>
                        <p>Name: MD: Ashikur Rahman</p>
                        <p>Email: babu.developer.664@gmail.com</p>
                        <p className='font-bold text-xl uppercase mt-5'>skills: </p>
                        <p>Expretise: HTML, CSS,
                            BOOTSTRAP, JavaScript, ES6</p>
                        <p>Comfortable: React, MongoDB,
                            NodeJS, ExpressJS, JSON, REST API</p>
                        <p>Familiar: Tailwind CSS, Redux,
                            NEXT.JS, SASS, Mongoose</p>
                        <p>Tools: Git, VSCode, Netlify,
                            Heroku, DevTools</p>
                    </div>
                    <div>
                        <h2 className='text-xl mb-3'>Other Live Site Link:</h2>
                        <Link to="https://bicycle-warehouse-f2360.web.app/" className='uppercase font-bold hover:underline'>bicycle warehouse, </Link>
                        <Link to="https://immigration-visa-consultant.web.app/" className='uppercase font-bold hover:underline'>Immigration Visa, </Link>
                        <Link to="https://gaming-reviews-site.netlify.app/" className='uppercase font-bold hover:underline'>gaming reviews</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;