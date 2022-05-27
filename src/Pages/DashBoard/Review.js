import React from 'react';

const Review = () => {

    const addReview = e => {
        e.preventDefault();
        const review = {
            review: e.target.review.value
        }
        console.log(review)
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl p-6">
                <h2 class="card-title text-center block mt-3">Add your Positive Review</h2>
                <div>
                    <form onSubmit={addReview}>
                        <input type="number" name='review' maxLength="5" placeholder="Please Rating" class="input input-bordered w-full max-w-full my-5" />
                        <textarea class="textarea textarea-bordered w-full max-w-full" placeholder="Your comment"></textarea>
                    </form>
                </div>
                <div class="card-actions justify-center">
                    <button class="btn w-full max-w-full mt-3">Add Review</button>
                </div>
            </div>
        </div>

    );
};

export default Review;