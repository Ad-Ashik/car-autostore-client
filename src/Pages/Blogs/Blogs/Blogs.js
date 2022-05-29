import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 w-6/12 mx-auto'>
            <h2 className='text-xl text-center font-bold'>All questions </h2>
            <div className='grid justify-center '>
                <div className='mt-3'>
                    <h2 className='text-md'><span className='font-bold'>Q1:</span> How will you improve the performance of a React Application?</h2>
                    <p> <span className='font-bold'>Answer: </span> improve the performance of a React Application-</p>
                    <li>Using Immutable Data Structures</li>
                    <li>Dependency optimization</li>
                    <li>Avoid Inline Function Definition in the Render Function.</li>
                    <li>Avoid using Index as Key for map</li>
                    <li>Spreading props on DOM elements</li>
                    <li>CSS Animations Instead of JS Animations</li>
                </div>
                <div className='mt-3'>
                    <h2 className='text-md'><span className='font-bold'>Q2:</span> What are the different ways to manage a state in a React application?</h2>
                    <p> <span className='font-bold'>Answer: </span> Four main types of state four main types of state React apps-</p>
                    <li>Local State</li>
                    <li>Global State</li>
                    <li>Server State</li>
                    <li>URL State</li>
                </div>
                <div className='mt-3'>
                    <h2 className='text-md'><span className='font-bold'>Q3:</span> How does prototypical inheritance work?</h2>
                    <p> <span className='font-bold'>Answer: </span> </p>
                    <li>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.</li>
                </div>
                <div className='mt-3'>
                    <h2 className='text-md'><span className='font-bold'>Q4:</span> What is a unit test? Why should write unit tests?</h2>
                    <p> <span className='font-bold'>Answer: </span> </p>
                    <li>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</li>
                </div>
            </div>
        </div>
    );
};

export default Blogs;