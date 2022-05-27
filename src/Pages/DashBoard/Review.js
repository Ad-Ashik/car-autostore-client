import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Review = () => {
    const navigate = useNavigate();

    const addReview = e => {
        e.preventDefault();
        const reviewImg = 'https://api.lorem.space/image/face?hash=33791';
        const review = {
            name: e.target.name.value,
            review: e.target.review.value,
            comment: e.target.comment.value,
            img: reviewImg
        }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.acknowledged);
                if (data.acknowledged) {
                    toast.success("Your Review Added", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    navigate('/')
                }
            })
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl p-6">
                <h2 class="card-title text-center block mt-3">Add your Positive Review</h2>
                <div>
                    <form onSubmit={addReview}>
                        <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-full mt-5" />
                        <input type="number" name='review' maxLength="5" placeholder="Please Rating" class="input input-bordered w-full max-w-full my-5" />
                        <textarea name='comment' class="textarea textarea-bordered w-full max-w-full" placeholder="Your comment"></textarea>
                        <input type="submit" value="Add Review" class="btn w-full max-w-full mt-3" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Review;