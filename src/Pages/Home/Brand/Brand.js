import React from 'react';

const Brand = ({ brand }) => {
    const { img } = brand;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Brand" />
            </figure>
        </div>
    );
};

export default Brand;