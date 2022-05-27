import React from 'react';
import { useQuery } from 'react-query';
import Show from '../../DashBoard/Show';
import Lodaing from '../../Shared/Lodaing/Lodaing';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('http://localhost:5000/review')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Lodaing></Lodaing>
    }
    return (
        <div className='mb-20 px-12'>
            <h2 className='text-center pb-10 text-2xl font-bold uppercase'>All Reviews</h2>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reviews.map(show => <Show
                        show={show}
                    ></Show>)
                }
            </div>
        </div>
    );
};

export default Reviews;