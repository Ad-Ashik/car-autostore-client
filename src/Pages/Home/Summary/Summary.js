import React from 'react';

const Summary = ({ summary }) => {
    const { img, number, text } = summary;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{number}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Summary;