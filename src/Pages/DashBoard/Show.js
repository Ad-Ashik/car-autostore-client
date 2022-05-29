import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Show = ({ show }) => {
    const { name, img, title, review, comment } = show;
    let showText;
    if (review === "5") {
        showText = <div className='text-orange-500'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </div>
    }
    else if (review === "4") {
        showText = <div className='text-orange-500'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </div>
    }
    else if (review === "3") {
        showText = <div className='text-orange-500'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </div>
    }
    else if (review === "2") {
        showText = <div className='text-orange-500'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </div>
    }
    else if (review === "1") {
        showText = <div className='text-orange-500'>
            <FontAwesomeIcon icon={faStar} />
        </div>
    }
    else {
        showText = <div className='text-orange-500'>
            <p>Bad Comment </p>
        </div>
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="stat flex">
                <div className="text-secondary">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={img} alt='' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold">{name}</div>
                    <div className="stat-desc text-secondary">{title}</div>
                </div>
            </div>
            <div className="card-body" style={{ marginTop: "-35px" }}>
                <h2 className="card-title">{showText}</h2>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Show;