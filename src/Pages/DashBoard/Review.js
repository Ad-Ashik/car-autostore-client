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
            title: e.target.title.value,
            comment: e.target.comment.value,
            img: reviewImg
        }
        fetch('https://secret-inlet-23442.herokuapp.com/review', {
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
            <div className="card w-96 bg-base-100 shadow-xl p-6">
                <h2 className="card-title text-center block mt-3">Add your Positive Review</h2>
                <div>
                    <form onSubmit={addReview}>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-full my-5" />
                        <input type="text" name='title' placeholder="Title" className="input input-bordered w-full max-w-full " />
                        <input type="number" name='review' maxLength="5" placeholder="Please Rating" className="input input-bordered w-full max-w-full my-5" />
                        <textarea name='comment' className="textarea textarea-bordered w-full max-w-full" placeholder="Your comment"></textarea>
                        <input type="submit" value="Add Review" className="btn w-full max-w-full mt-3" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Review;