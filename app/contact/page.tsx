'use client'

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
    fullName: string;
    email: string;
    address: string;
    phoneNumber: string;
    plantType: string;
    message: string;
}

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <div className="pt-20">
            <h3 className="text-center text-2xl sm:text-3xl font-bold mb-1 py-20 text-black">
                Send Us A Message!
            </h3>
            <div className="flex flex-col gap-2 bg-green w-full text-white bg-primary py-5">
                <p className="black text-center m-auto text-xl pt-8 w-[23rem]">
                    If you have any questions, send us a note through the submission box
                    below
                </p>
                <form
                    className='flex-center flex-col  gap-2 w-full'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="px-4 w-full sm:w-4/5 md:w-3/4 xl:w-2/4 flex flex-col gap-2">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            className='input'
                            type="text"
                            id="fullName"
                            {...register('fullName', { required: true })}
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && <span className="error">Full name is required</span>}

                        <label htmlFor="email">Email</label>
                        <input
                            className='input'
                            type="email"
                            id="email"
                            {...register('email', { required: true })}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error">Email is required</span>}

                        <label htmlFor="address">Address</label>
                        <input
                            className='input'
                            type="text"
                            id="address"
                            {...register('address')}
                            placeholder="Enter your address"
                        />

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            className='input'
                            type="text"
                            id="phoneNumber"
                            {...register('phoneNumber')}
                            placeholder="Enter your phone number"
                        />

                        <p>Select the type of plant you&apos;re interested in:</p>
                        <div className="flex flex-col gap-1 pb-3">
                            <label>
                                <input
                                    type="radio"
                                    value="Indoor Plants"
                                    {...register('plantType')}
                                />
                                Indoor Plants
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Outdoor Plants"
                                    {...register('plantType')}
                                />
                                Outdoor Plants
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Succulents"
                                    {...register('plantType')}
                                />
                                Succulents
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Flowering Plants"
                                    {...register('plantType')}
                                />
                                Flowering Plants
                            </label>
                        </div>

                        <label htmlFor="message">Message</label>
                        <textarea
                            className='input'
                            id="message"
                            {...register('message')}
                            placeholder="Enter your message"
                        />

                        <button
                            className='button bg-black text-white mt-2 mb-5'
                            type="submit"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
