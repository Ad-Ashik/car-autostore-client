import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

    }

    return (
        <div>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title block text-center">Purchase Now</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text" value={user.displayName} disabled
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email" value={user.email} disabled
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Flat / House / Office No.</span>
                                </label>
                                <input
                                    type="text" placeholder='address'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Street / Society / Office Name</span>
                                </label>
                                <input
                                    type="text" placeholder='Street Address'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("streetAddress", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Pincode</span>
                                </label>
                                <input
                                    type="text" placeholder='Pincode'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("pincode", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input
                                    type="text" placeholder='Country'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("country", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input
                                    type="text" placeholder='City'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("city", {
                                        required: {
                                            value: true,
                                        }
                                    })}
                                />
                            </div>


                            <input className='btn w-full max-w-xs mt-5' type="submit" value="Order Now" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;