import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Lodaing from '../Shared/Lodaing/Lodaing';
import Show from './Show';

const ReviewShow = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('https://secret-inlet-23442.herokuapp.com/review')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Lodaing></Lodaing>
    }
    return (
        <div className='mb-20'>
            <h2 className='text-center pb-10 text-2xl font-bold uppercase'>Reviews</h2>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    reviews.slice(0, 6).map(show => <Show
                        show={show}
                    ></Show>)
                }
            </div>
            <Link to="/reviews">
                <h2 className='btn btn-outline btn-success w-full max-w-xl mx-auto flex mt-10'>All Reviews</h2>
            </Link>
        </div>
    );
};

export default ReviewShow;