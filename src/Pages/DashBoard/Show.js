import React from 'react';

const Show = ({ show }) => {
    const { review, comment } = show;
    let showText;
    if (review === "5") {
        showText = "your rating is 5"
    }

    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{showText}</h2>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Show;